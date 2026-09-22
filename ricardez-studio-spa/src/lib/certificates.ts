import certificateRecords from '../data/certificates.json';
import { getArtworkById } from './artworks';

export type CertificateStatus = 'valid' | 'revoked' | 'replaced';

export type Certificate = {
  certificateId: string;
  artworkId: string;
  verificationToken: string;
  issuedAt?: string;
  status: CertificateStatus;
  replacedBy?: string;
};

export const certificates = certificateRecords as Certificate[];

export const getCertificateByToken = (token: string) =>
  certificates.find((certificate) => certificate.verificationToken === token);

export const getCertificateByIdentifier = (identifier: string) =>
  certificates.find(
    (certificate) =>
      certificate.certificateId.toLowerCase() === identifier.toLowerCase() ||
      certificate.artworkId.toLowerCase() === identifier.toLowerCase()
  );

export const getVerificationRecord = (token: string) => {
  const certificate = getCertificateByToken(token);
  if (!certificate) return null;
  const artwork = getArtworkById(certificate.artworkId);
  return artwork ? { certificate, artwork } : null;
};
