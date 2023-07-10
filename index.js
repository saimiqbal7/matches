const array1 = [
    '2JTTbEKGxzuHtisJi4HsKbHyjUCVZmNNVMk34dr7ivih',
    '2qsN7KABKQwPdcmsNcwQuWxCsjP9EW4EtFdLsz3c4NHh',
    '3B2ouk6cNUPK17pibRCkTHm99D4w36RZGnmRLtzrmRga',
    '3qaYGTX1bEae63bJPA1ueSwY1BUYiyoQTqZjC5FXz8aL',
    '58LeJdbfs76sQRxfeR73qt55qkSw1rVcgrTatyAACuY2',
    '5b9cmCNr73G9B8Hu5ofHjBU4s4J2YvfxasdzB839Jj5Z',
    '6EBksv19vS3Rtp6shsgYQDcjTN1FM4G98zvKExReroJe',
    '6LDhCJxR6VNCdeNaNwjTuABLKynY4PK5ma12F9CQtmmi',
    '6SCmDCNUtjZbbgMPE955Hb7AZuwa9Dfd4FQUDarh4A4X',
    '72KXiwiyepKFnJcwckLxJaiVN8SuPmiWmKGA5W4emx6L',
    '7BKNJBNF7CWfMoqaYKXFYTvdonLiALnKf9bHpEkHPdA9',
    '7McZHymdthkeasN1fW1QRg7xy7VA2VFys32nNcp9egeS',
    '7TYxFqiLNXgyab1U6hEfDt3jCLydHqPMPXQwgfo3gHZx',
    '7YvB9HCoorAxUrc8q3jMxgJszRouxLgddbY4pQsxHhxk',
    '7b9ssCVyEFYMxexZ3XgBmmbh3D2qb4R8nzVWuxkCRrMz',
    '7eCMJ8orWiwnyrWtUjbT8LPsy88SEPWsEvGLsSBkMhPf',
    '7pBPJGBjdiE2VVSCubTUTvRVADpTuQu2Brh4w4ZqGDhD',
    '7xyDK4XMUk6fLtVJE2SYvTfiLsw72Jy65q59Vu3VfJa6',
    '86bGmHjyBXEXDbk5aPdjboY1oH5Zvnniv1ybzHq2htA3',
    '8GZaEza5ovxSTwhaJPnEHbqBeChxszfCU8gu4j2XVi8Y',
    '8QAdui3d6qRrQyqXJJQTzXgnAQmhUiwqRUZXdR4wNDhD',
    '9iQ23NQH7og4HnMQ6wEjZcabLXtHKMaj8ZPF61d71ije',
    '9yX9rXLcxpEgCjgPgyz3P45J1EBRGMeTfCymvtnq2ycH',
    'A11Rawv6J1Eq1dCtHdHDT9SMMj1UX7edx9NeaEVBgwtb',
    'A1NqCTei8ksgHmzYMQQXjim3ydRHfuwpywrALjAUisMv',
    'A2KDRwQCepvVJh5dgyFWw6zCcTabfb9nnucVX5t8FDac',
    'AENbnQDWeE3c8qMRDyyvpcsbDHAsqytNgCVNXX7KcDws',
    'AgNx45vSAdQAj5nALDvxRSPTvKvAjZjnfEhjAiYnJPMd',
    'B1mRjxmVzaN3S7EfUSHtFim27duUoLbVHHRkhAzdTkbK',
    'BHnoVkLPbQvyoqy31bFhduiD1NNdMGKmarPAMiWza3De',
    'BKhGejatPk4Eo948AMs8Qt7PypgLqvRvL9VaVJG7gmdC',
    'BRAHaRpqRxtsSNEZhvPoaM1kFikYWpkq5g7XKi8ajVNT',
    'BXandQK2Q3V9HDoodMVRUxMxendMS7aQs568tYpXrBKs',
    'BaVy4ydgqezcByyMGgmrt5Mp8AdNe4vAzRhoCr5T6MQM',
    'Bvjdp9nBvVxiw9jzi6TsubNhSduh99i83AB7HxnKsFpF',
    'BzrGbXqZ3ywHrfXLgwroFuCfF7CodA3gbKjLRejUNBY3',
    'C7GRDmtqXrHoKXYZ5HCh34N1LUemHNhe1BXQwCPmi1gd',
    'CPbYd7r7NvdXQwo8m4wgv4M7phB9rmo18UcxFNc2erF8',
    'CScUbsbd2zW5GtsJY3WGDov3BBDvNurQMAUBiawzyzie',
    'CtJePs3YGGDTtm5LV44taVwjHf31L3uwypm4URYYnoYn',
    'CxP26uVQXQ1cyPmaDYSTCrtSR4eYak8EX7jVy1raJcAh',
    'DLVKP4RP7fvDf5hULUK7DmaaWCYqdTh4MMv3xj7VsuS1',
    'DNP8ksQKmCWpMjGJAMuSyQ2yiAMoGorrck2o6rJLv8eP',
    'DWiJJBXnYLBpXsVMxGzGWEtTLFzGomC4mexMrjBfTGNP',
    'DjpdXx1P5AXKhy1gaBWX1zbpj6QwkCYxisDm5gUcSwFV',
    'ENgKwPp59N1yq65jmqL2xdkWjYTCyMfFgpithCFYAFhQ',
    'EtnEHFiGgsSqJw2gKHHJa6fuKgK9y9G5MNPVPrcwUWLs',
    'F3xMim9cHfXqABMjm2AiUBBroa5fFfoRTM2dTZhSULQP',
    'FBmHQy9g4zB5cgPMnBxniC36ZWQDb58jN2yVRxFw3QNY',
    'FMBLtPXEc8R2SFJZJi2iE29MjxqARyZFh2LcGhwL25X3',
    'FUDwESNhWp3Si9525d9YE8p6xZ87hzN8oCYNffMW62eC',
    'FZEo7KrD6BjJmAXjTQq1HJoxLoE9UgKnGUyB6hkqrkrc',
    'G7soRMSgx7K3SbrLh2GfVGPABw5bW83bjfPoWsiU7kcr',
    'GTxmcmv6DgN5H6Syho4mxkCbc2hdLZPh1U98zidvjCoG',
    'GzKWKavHxihaFf3L1MYPjiJkZJ4EGWfsRA61KGNpBuzF',
    'Hyc4iBXw2HUTX3NxV9Wd2tnS8mdYnMzUyAqmE1mAQYLp'
  ];


  
 const array2 = [

    '4iMqCe7zRbT69oubMC5kqXzgq7cyoVn7cNopgqNSHmgW',
    'HcvhpTaEDBk9hiZKHHFhci5mqDzjZiRDdfxgkcAbbQzs',
    '4DRAoW1UwqZ9DqyndY6tB6i86UosG5Sbg2B6zKHbmimt',
    'D3bLNjSom4oUw6LCdWxo5jycAgoRDX57M6KNrmEeJheu',
    'DZ26svxdtn9h2gsyrcM28aKCzLq896iVZtgvEjB8ekf6',
    '8nzRW311S6RJF6Gj9SUWnmp4xLepS41xMvCRBKcpgUrm',
    '63taib5fhJxQGXLg64wCdot5Q2mZ4t6J2xyciyf2RTCv',
    'GEoxC9UDvzZ2fgvAh3R4fD2QL9ZLT5pxVHLv2fLh82CW',
    'AvorzT1tw1kWsDv7oeUvQjhoqeuiAt9eXu25neYcGq85',
    'DLFwhrFeAhh39HjfMEVYJPWGTZ2d3GR31Y7Rnd7WVUSR',
    '4TC2EMeAC2UD8y99Zat943kMkLnZY48SMwxspvxJ9u1K',
    '8Pq6LK4DVXm8NYQP4Qau7hSVEHaGx792v5sJ4t51oCW2',
    '2NNyorYRMF5EGsCwPjsmGi2zYzKnoX9SJKjBw4bWM6Dp',
    '4dyg3WyMzAw9QPv6sLmAitvb5RUYSJ5n3op7xuKn2Lgn',
    '5jVWQMnV83ThWuSbAgHANLNC26D4x8XJuvZ4oycfsNKg',
    'BBasFCMBTaHLqUxfvoLJXKbSkvBFGqZdSPiP5v5omdYg',
    'GsFmE5QLAffXpnxBURdVjCX1AdAgSRfFWbLBCPeCr3CT',
    'DBPT5DfnG4rTe9ARm4Gy3Xv8NP9CtGuH35Ud8JikKzNb',
    'kcRVdwJKR8fiXw3fYQNMfha1JDWVK9pwFjYR9K2VS8u',
    '3mC3HRPue7JC6smM6RV6WrbfMw8FMqFzmrzLfeDpZwpP',
    '3D6cbDyn9DEboZFYx5GDpkMGcDd9DDLq57E8V3npkw4M',
    '4oRnxTMj22kT1BnbR78e4ng7XRK3wYEczSUdzfYsPgnF',
    'BUR8tA9vGTmq6RF5EvtKCDDaFG9tXZ3CDu2i26fXfWS8',
    '4hEZtd3KkSAuG88MfYK1ZfsbwTUCcMVuwnD6tXJAnRmB',
    'EupWRPXt1PsNbtbyubMsvRvMdeEgutPKFgye521B74LP',
    'HdTDKaaea2e7hMvgaoJtZuDL8vrhQMyBYkcMDYwVpU22',
    '8cn24oosfGgb73szRMFPgEeGqyEoZMwMsvKkW493SZc4',
    '8cn24oosfGgb73szRMFPgEeGqyEoZMwMsvKkW493SZc4',
    '7eMXEtqx2HSWh65wZCc7dbWroGsDwMm916pChbXWG2b2',
    'AA4z8z22bRD2iE2EG2VTTeDACh8QEehGUGcmZNaXo54T',
    '4KMs4eYN1maG9WPuBisrgApGuzEvWj2w2tCA1w66ZAyW',
    'GeQRnJ8jEKHrtoykcBREvSr4iXnJwAggJBFemfacvHdB',
    'Pe3Dx87HqXQHFUjrqpAVa4m3tmgN7Fco8fNVRNcizTh',
    '22hoSh2MzSyzxVcnb6K6rPddMLL7Nsp7T1CaC1rXp8Ms',
    'ETsrzjQaZCrJaP2tAyLdvsRRBRpvdpEVnfbDW8sxP2Xr',
    'GSxEzTCryV1aS4DuSVGVTKiSvyayFbDEtFK7gBDgZ6Hb',
    'CV9z7aC6kJGPhAWerEyB9opjaGkxZZHr4vkg4gV3CDiX',
    'CTEjHeTWNC6KXekRFKU7WJV31wFkv4eswynwsPLR2FEF',
    '6kfmobNMGaXCUuVhdCaa8fkmzBQ26cQc2VCuYsbwqkt9',
    'HEYPdKfdgBa14SFWHPmuVDutmpkkzwUxSdorYWdsWk9r',
    'HkbVAQTJwcEfydKv2ouZim4eBSFkDTiyU9b3mmWP28me',
    '2Q1MRhkXQhxWhwdAxmDGUDX8Yxvo5d6s8GQWWG5zKT6e',
    'EajFPUZnVyWopws8XT4g6kM3zNyvWnJk6ZBvDcXVmcsq',
    'GhYMcC18X8HBRbzBqwi1eSVK19DNk1mtKpmEGgaKV4tv',
    'Ab1TCr1EAevj1GwUWUSRwXuq46akpKXbRDBmYZ9QB7cX',
    'B446rtdNC5FihGg69QoVDUdsehQx4Cxo8qVjYnLvd5tr',
    'a9G5cEf5CTxVer8EgDLgzro6ajS1USQKxLzqqnBoGAD',
    '6nPp43wucvF5CuDto75MFBS7Np5R7BXtLjrqgShPD4v3',
    'FwJQTYQZNiwQxW1WSK8atJiHNeksS3tR4s2Dfiaho8ga',
    '822suGtaV3x8oRGWcxWdYqVVihDc8gcdh6hsRt7w4Psf',
    '3Vxp4ctAVBup8iBK4FRrB96T8V3qm58UP2s5VWLhUEVR',
    '6VF2bCEjpPsdB71BHJf6KjDtNkuWXNPrCeu3nnBMPfVH',
    'CUBSjuFuidxpnTasxbDmZEP9Me5pMxce4KtnyP7pin35'
  ]


function findMatchingElements(arr1, arr2) {
  const matchingElements = [];

  for (const element of arr1) {
    if (arr2.includes(element)) {
      matchingElements.push(element);
    }
  }

  return matchingElements;
}

const matchingElements = findMatchingElements(array1, array2);

console.log("Matching elements:", matchingElements);
