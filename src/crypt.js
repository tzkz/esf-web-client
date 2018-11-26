import forge from 'node-forge'

export const decryptP12 = (p12base64, password) => { 
  const p12Der = forge.util.decode64(p12base64)
  const p12asn1 = forge.asn1.fromDer(p12Der)

  return forge.pkcs12.pkcs12FromAsn1(p12asn1, password)
}

export const extractCert = (p12) => {
  const bags = p12.getBags({ bagType: forge.pki.oids.certBag })
  const { cert } = bags[forge.pki.oids.certBag][0]

  return cert;
}

export const toTrimmedPem = (x509) => {
  const pem = forge.pki.certificateToPem(x509)

  return pem
    .replace('-----BEGIN CERTIFICATE-----', '')
    .replace('-----END CERTIFICATE-----', '')
    .replace(/\r?\n|\r/g, '')
    .trim()
}
