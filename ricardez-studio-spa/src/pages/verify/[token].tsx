import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Seo from '../../components/Seo';
import { certificates, getVerificationRecord, type CertificateStatus } from '../../lib/certificates';
import styles from './Verify.module.css';

type VerificationView = {
  certificateId: string;
  issuedAt?: string;
  status: CertificateStatus;
  artwork: { id: string; slug: string; title: string; year: number; medium: string; dimensions?: string; image: string };
};
type Props = { record: VerificationView | null };

const statusCopy: Record<CertificateStatus, { heading: string; detail: string }> = {
  valid: { heading: 'Certificate verified', detail: 'This certificate is currently registered as valid.' },
  revoked: { heading: 'This certificate is no longer valid.', detail: 'The certificate has been revoked in the artist’s archive.' },
  replaced: { heading: 'This certificate has been superseded by a newer certificate.', detail: 'This record is retained for archival verification.' },
};

export default function VerifyPage({ record }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!record) return (
    <main className={styles.page}>
      <Seo title="Certificate not found | Fer Ricárdez" description="Certificate verification result." robots="noindex,nofollow,noarchive" />
      <div className={`${styles.panel} ${styles.failure}`}>
        <p className={styles.kicker}>Fer Ricárdez · Certificate archive</p>
        <h1>Certificate not found</h1>
        <p>The supplied verification code does not correspond to a certificate currently registered by Fer Ricárdez.</p>
      </div>
    </main>
  );

  const copy = statusCopy[record.status];
  const issued = record.issuedAt ? new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${record.issuedAt}T00:00:00Z`)) : null;
  return (
    <main className={styles.page}>
      <Seo title={`${copy.heading} | Fer Ricárdez`} description="Certificate verification result." image={record.artwork.image} robots="noindex,nofollow,noarchive" />
      <article className={styles.panel}>
        <p className={styles.kicker}>Fer Ricárdez · Certificate archive</p>
        <div className={styles.status} data-status={record.status}><span aria-hidden="true" /> <strong>{copy.heading}</strong></div>
        <p className={styles.statusDetail}>{copy.detail}</p>
        <div className={styles.work}>
          <img src={record.artwork.image} alt={record.artwork.title} />
          <div><p className={styles.artist}>Fer Ricárdez</p><h1>{record.artwork.title}</h1><p>{record.artwork.year}<br />{record.artwork.medium}{record.artwork.dimensions && <><br />{record.artwork.dimensions}</>}</p></div>
        </div>
        <dl className={styles.identifiers}>
          <div><dt>Artwork ID</dt><dd>{record.artwork.id}</dd></div>
          <div><dt>Certificate ID</dt><dd>{record.certificateId}</dd></div>
          <div><dt>Status</dt><dd>{record.status.charAt(0).toUpperCase() + record.status.slice(1)}</dd></div>
          {issued && <div><dt>Issued</dt><dd>{issued}</dd></div>}
        </dl>
        <Link href={`/catalogo/${record.artwork.slug}`} className={styles.link}>View artwork in the public catalog →</Link>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [...certificates.map(({ verificationToken }) => ({ params: { token: verificationToken } })), { params: { token: 'not-found' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const source = getVerificationRecord(String(params?.token));
  if (!source) return { props: { record: null } };
  const { certificate, artwork } = source;
  return { props: { record: { certificateId: certificate.certificateId, issuedAt: certificate.issuedAt ?? null, status: certificate.status, artwork: { id: artwork.id, slug: artwork.slug, title: artwork.title.es, year: artwork.year, medium: artwork.medium.es, dimensions: artwork.dimensions ?? null, image: artwork.images[0].src } } as VerificationView } };
};
