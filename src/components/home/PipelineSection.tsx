const PipelineSection = () => {
  const pipeline = [
    {
      id: 'tnik',
      name: 'TNIK',
      description: 'TNIK Inhibitor: Treating Fibrotic diseases of the Lung and Kidney',
      phases: {
        discovery: true,
        lead: true,
        preclinical: true,
        clinical: false
      }
    },
    {
      id: 'usp1',
      name: 'USP1',
      description: 'Ubiquitin Specific Protease 1 (USP1) Inhibitor for the treatment of BRCA-mutant cancers',
      phases: {
        discovery: true,
        lead: true,
        preclinical: true,
        clinical: false
      }
    },
    {
      id: 'qpctl',
      name: 'QPCTL',
      description: 'Glutaminyl-peptide cyclotransferase-like protein (QPCTL) Inhibitor: Novel cancer immunotherapy for COLD tumors',
      phases: {
        discovery: true,
        lead: true,
        preclinical: true,
        clinical: true
      }
    },
    {
      id: 'phd',
      name: 'PHD',
      description: 'Proline Hydroxylase (PHD) Inhibitors: Treatment of Inflammatory Bowel Disease (IBD) and Chronic Kidney Disease (CKD)',
      phases: {
        discovery: true,
        lead: true,
        preclinical: true,
        clinical: false
      }
    },
    {
      id: 'mat2a',
      name: 'MAT2A',
      description: 'Methionine adenosyltransferase 2 (MAT2A) Inhibitor: Treatment of MTAP Deficient Cancers',
      phases: {
        discovery: true,
        lead: true,
        preclinical: true,
        clinical: false
      }
    }
  ];

  return (
    <section className="bg-secondary px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-bold">Therapeutic Pipeline</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Target</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Description</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Target ID</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Hit-to-lead</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Lead opt.</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">IND-enabling</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Phase I</th>
                <th className="whitespace-nowrap py-3 text-left text-sm font-medium uppercase tracking-wider">Phase II</th>
              </tr>
            </thead>
            <tbody>
              {pipeline.map((item, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4 text-sm">
                    <span className="font-medium">{item.name}</span>
                  </td>
                  <td className="max-w-sm py-4 text-sm">{item.description}</td>
                  <td className="py-4">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </td>
                  <td className="py-4">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </td>
                  <td className="py-4">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </td>
                  <td className="py-4">
                    {item.phases.preclinical && (
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                    )}
                  </td>
                  <td className="py-4">
                    {item.phases.clinical && (
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                    )}
                  </td>
                  <td className="py-4">
                    {item.id === 'qpctl' && (
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Over 20 additional newly initiated programs in the discovery stage
        </p>
      </div>
    </section>
  );
};

export default PipelineSection;
