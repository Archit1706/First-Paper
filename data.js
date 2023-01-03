const name = "First Paper"
const tagline = "Write something new everyday!"
const categoryMap = {
    'astro-ph': 'Astrophysics',
    'astro-ph.CO': 'Cosmology and Nongalactic Astrophysics',
    'astro-ph.EP': 'Earth and Planetary Astrophysics',
    'astro-ph.GA': 'Astrophysics of Galaxies',
    'astro-ph.HE': 'High Energy Astrophysical Phenomena',
    'astro-ph.IM': 'Instrumentation and Methods for Astrophysics',
    'astro-ph.SR': 'Solar and Stellar Astrophysics',
    'cond-mat.dis-nn': 'Disordered Systems and Neural Networks',
    'cond-mat.mes-hall': 'Mesoscale and Nanoscale Physics',
    'cond-mat.mtrl-sci': 'Materials Science',
    'cond-mat.other': 'Other Condensed Matter',
    'cond-mat.quant-gas': 'Quantum Gases',
    'cond-mat.soft': 'Soft Condensed Matter',
    'cond-mat.stat-mech': 'Statistical Mechanics',
    'cond-mat.str-el': 'Strongly Correlated Electrons',
    'cond-mat.supr-con': 'Superconductivity',
    'cs.AI': 'Artificial Intelligence',
    'cs.AR': 'Hardware Architecture',
    'cs.CC': 'Computational Complexity',
    'cs.CE': 'Computational Engineering, Finance, and Science',
    'cs.CG': 'Computational Geometry',
    'cs.CL': 'Computation and Language',
    'cs.CR': 'Cryptography and Security',
    'cs.CV': 'Computer Vision and Pattern Recognition',
    'cs.CY': 'Computers and Society',
    'cs.DB': 'Databases',
    'cs.DC': 'Distributed, Parallel, and Cluster Computing',
    'cs.DL': 'Digital Libraries',
    'cs.DM': 'Discrete Mathematics',
    'cs.DS': 'Data Structures and Algorithms',
    'cs.ET': 'Emerging Technologies',
    'cs.FL': 'Formal Languages and Automata Theory',
    'cs.GL': 'General Literature',
    'cs.GR': 'Graphics',
    'cs.GT': 'Computer Science and Game Theory',
    'cs.HC': 'Human-Computer Interaction',
    'cs.IR': 'Information Retrieval',
    'cs.IT': 'Information Theory',
    'cs.LG': 'Machine Learning',
    'cs.LO': 'Logic in Computer Science',
    'cs.MA': 'Multiagent Systems',
    'cs.MM': 'Multimedia',
    'cs.MS': 'Mathematical Software',
    'cs.NA': 'Numerical Analysis',
    'cs.NE': 'Neural and Evolutionary Computing',
    'cs.NI': 'Networking and Internet Architecture',
    'cs.OH': 'Other Computer Science',
    'cs.OS': 'Operating Systems',
    'cs.PF': 'Performance',
    'cs.PL': 'Programming Languages',
    'cs.RO': 'Robotics',
    'cs.SC': 'Symbolic Computation',
    'cs.SD': 'Sound',
    'cs.SE': 'Software Engineering',
    'cs.SI': 'Social and Information Networks',
    'cs.SY': 'Systems and Control',
    'econ.EM': 'Econometrics',
    'eess.AS': 'Audio and Speech Processing',
    'eess.IV': 'Image and Video Processing',
    'eess.SP': 'Signal Processing',
    'gr-qc': 'General Relativity and Quantum Cosmology',
    'hep-ex': 'High Energy Physics - Experiment',
    'hep-lat': 'High Energy Physics - Lattice',
    'hep-ph': 'High Energy Physics - Phenomenology',
    'hep-th': 'High Energy Physics - Theory',
    'math.AC': 'Commutative Algebra',
    'math.AG': 'Algebraic Geometry',
    'math.AP': 'Analysis of PDEs',
    'math.AT': 'Algebraic Topology',
    'math.CA': 'Classical Analysis and ODEs',
    'math.CO': 'Combinatorics',
    'math.CT': 'Category Theory',
    'math.CV': 'Complex Variables',
    'math.DG': 'Differential Geometry',
    'math.DS': 'Dynamical Systems',
    'math.FA': 'Functional Analysis',
    'math.GM': 'General Mathematics',
    'math.GN': 'General Topology',
    'math.GR': 'Group Theory',
    'math.GT': 'Geometric Topology',
    'math.HO': 'History and Overview',
    'math.IT': 'Information Theory',
    'math.KT': 'K-Theory and Homology',
    'math.LO': 'Logic',
    'math.MG': 'Metric Geometry',
    'math.MP': 'Mathematical Physics',
    'math.NA': 'Numerical Analysis',
    'math.NT': 'Number Theory',
    'math.OA': 'Operator Algebras',
    'math.OC': 'Optimization and Control',
    'math.PR': 'Probability',
    'math.QA': 'Quantum Algebra',
    'math.RA': 'Rings and Algebras',
    'math.RT': 'Representation Theory',
    'math.SG': 'Symplectic Geometry',
    'math.SP': 'Spectral Theory',
    'math.ST': 'Statistics Theory',
    'math-ph': 'Mathematical Physics',
    'nlin.AO': 'Adaptation and Self-Organizing Systems',
    'nlin.CD': 'Chaotic Dynamics',
    'nlin.CG': 'Cellular Automata and Lattice Gases',
    'nlin.PS': 'Pattern Formation and Solitons',
    'nlin.SI': 'Exactly Solvable and Integrable Systems',
    'nucl-ex': 'Nuclear Experiment',
    'nucl-th': 'Nuclear Theory',
    'physics.acc-ph': 'Accelerator Physics',
    'physics.ao-ph': 'Atmospheric and Oceanic Physics',
    'physics.app-ph': 'Applied Physics',
    'physics.atm-clus': 'Atomic and Molecular Clusters',
    'physics.atom-ph': 'Atomic Physics',
    'physics.bio-ph': 'Biological Physics',
    'physics.chem-ph': 'Chemical Physics',
    'physics.class-ph': 'Classical Physics',
    'physics.comp-ph': 'Computational Physics',
    'physics.data-an': 'Data Analysis, Statistics and Probability',
    'physics.ed-ph': 'Physics Education',
    'physics.flu-dyn': 'Fluid Dynamics',
    'physics.gen-ph': 'General Physics',
    'physics.geo-ph': 'Geophysics',
    'physics.hist-ph': 'History and Philosophy of Physics',
    'physics.ins-det': 'Instrumentation and Detectors',
    'physics.med-ph': 'Medical Physics',
    'physics.optics': 'Optics',
    'physics.plasm-ph': 'Plasma Physics',
    'physics.pop-ph': 'Popular Physics',
    'physics.soc-ph': 'Physics and Society',
    'physics.space-ph': 'Space Physics',
    'q-bio.BM': 'Biomolecules',
    'q-bio.CB': 'Cell Behavior',
    'q-bio.GN': 'Genomics',
    'q-bio.MN': 'Molecular Networks',
    'q-bio.NC': 'Neurons and Cognition',
    'q-bio.OT': 'Other Quantitative Biology',
    'q-bio.PE': 'Populations and Evolution',
    'q-bio.QM': 'Quantitative Methods',
    'q-bio.SC': 'Subcellular Processes',
    'q-bio.TO': 'Tissues and Organs',
    'q-fin.CP': 'Computational Finance',
    'q-fin.EC': 'Economics',
    'q-fin.GN': 'General Finance',
    'q-fin.MF': 'Mathematical Finance',
    'q-fin.PM': 'Portfolio Management',
    'q-fin.PR': 'Pricing of Securities',
    'q-fin.RM': 'Risk Management',
    'q-fin.ST': 'Statistical Finance',
    'q-fin.TR': 'Trading and Market Microstructure',
    'quant-ph': 'Quantum Physics',
    'stat.AP': 'Applications',
    'stat.CO': 'Computation',
    'stat.ME': 'Methodology',
    'stat.ML': 'Machine Learning',
    'stat.OT': 'Other Statistics',
    'stat.TH': 'Statistics Theory'
}

const categories = ['Astrophysics',
    'Cosmology and Nongalactic Astrophysics',
    'Earth and Planetary Astrophysics',
    'Astrophysics of Galaxies',
    'High Energy Astrophysical Phenomena',
    'Instrumentation and Methods for Astrophysics',
    'Solar and Stellar Astrophysics',
    'Disordered Systems and Neural Networks',
    'Mesoscale and Nanoscale Physics',
    'Materials Science',
    'Other Condensed Matter',
    'Quantum Gases',
    'Soft Condensed Matter',
    'Statistical Mechanics',
    'Strongly Correlated Electrons',
    'Superconductivity',
    'Artificial Intelligence',
    'Hardware Architecture',
    'Computational Complexity',
    'Computational Engineering, Finance, and Science',
    'Computational Geometry',
    'Computation and Language',
    'Cryptography and Security',
    'Computer Vision and Pattern Recognition',
    'Computers and Society',
    'Databases',
    'Distributed, Parallel, and Cluster Computing',
    'Digital Libraries',
    'Discrete Mathematics',
    'Data Structures and Algorithms',
    'Emerging Technologies',
    'Formal Languages and Automata Theory',
    'General Literature',
    'Graphics',
    'Computer Science and Game Theory',
    'Human-Computer Interaction',
    'Information Retrieval',
    'Information Theory',
    'Machine Learning',
    'Logic in Computer Science',
    'Multiagent Systems',
    'Multimedia',
    'Mathematical Software',
    'Numerical Analysis',
    'Neural and Evolutionary Computing',
    'Networking and Internet Architecture',
    'Other Computer Science',
    'Operating Systems',
    'Performance',
    'Programming Languages',
    'Robotics',
    'Symbolic Computation',
    'Sound',
    'Software Engineering',
    'Social and Information Networks',
    'Systems and Control',
    'Econometrics',
    'Audio and Speech Processing',
    'Image and Video Processing',
    'Signal Processing',
    'General Relativity and Quantum Cosmology',
    'High Energy Physics - Experiment',
    'High Energy Physics - Lattice',
    'High Energy Physics - Phenomenology',
    'High Energy Physics - Theory',
    'Commutative Algebra',
    'Algebraic Geometry',
    'Analysis of PDEs',
    'Algebraic Topology',
    'Classical Analysis and ODEs',
    'Combinatorics',
    'Category Theory',
    'Complex Variables',
    'Differential Geometry',
    'Dynamical Systems',
    'Functional Analysis',
    'General Mathematics',
    'General Topology',
    'Group Theory',
    'Geometric Topology',
    'History and Overview',
    'Information Theory',
    'K-Theory and Homology',
    'Logic',
    'Metric Geometry',
    'Mathematical Physics',
    'Numerical Analysis',
    'Number Theory',
    'Operator Algebras',
    'Optimization and Control',
    'Probability',
    'Quantum Algebra',
    'Rings and Algebras',
    'Representation Theory',
    'Symplectic Geometry',
    'Spectral Theory',
    'Statistics Theory',
    'Mathematical Physics',
    'Adaptation and Self-Organizing Systems',
    'Chaotic Dynamics',
    'Cellular Automata and Lattice Gases',
    'Pattern Formation and Solitons',
    'Exactly Solvable and Integrable Systems',
    'Nuclear Experiment',
    'Nuclear Theory',
    'Accelerator Physics',
    'Atmospheric and Oceanic Physics',
    'Applied Physics',
    'Atomic and Molecular Clusters',
    'Atomic Physics',
    'Biological Physics',
    'Chemical Physics',
    'Classical Physics',
    'Computational Physics',
    'Data Analysis, Statistics and Probability',
    'Physics Education',
    'Fluid Dynamics',
    'General Physics',
    'Geophysics',
    'History and Philosophy of Physics',
    'Instrumentation and Detectors',
    'Medical Physics',
    'Optics',
    'Plasma Physics',
    'Popular Physics',
    'Physics and Society',
    'Space Physics',
    'Biomolecules',
    'Cell Behavior',
    'Genomics',
    'Molecular Networks',
    'Neurons and Cognition',
    'Other Quantitative Biology',
    'Populations and Evolution',
    'Quantitative Methods',
    'Subcellular Processes',
    'Tissues and Organs',
    'Computational Finance',
    'Economics',
    'General Finance',
    'Mathematical Finance',
    'Portfolio Management',
    'Pricing of Securities',
    'Risk Management',
    'Statistical Finance',
    'Trading and Market Microstructure',
    'Quantum Physics',
    'Applications',
    'Computation',
    'Methodology',
    'Machine Learning',
    'Other Statistics',
    'Statistics Theory'];

const team = [
    {
        name: "Mokshit Surana",
        tag: "Pythonista, ML Enthusiast",
        github: "",
        twitter: "",
        linkedin: "",
        img: "",
    },
    {
        name: "Archit Rathod",
        tag: "Web Developer",
        github: "https://github.com/Archit1706",
        twitter: "https://twitter.com/ArchitRathod_17",
        linkedin: "https://www.linkedin.com/in/archit-rathod/",
        img: "",
    }
]
const projectLinks = {
    web: "https://first-paper.vercel.app/",
    github: "https://github.com/Archit1706/First-Paper"
}
const papers = [
    {
        'id': '0704.0001',
        'submitter': 'Pavel Nadolsky',
        'authors': "C. Bal\\'azs, E. L. Berger, P. M. Nadolsky, C.-P. Yuan",
        'title': 'Calculation of prompt diphoton production cross sections at Tevatron and\n  LHC energies',
        'journal-ref': 'Phys.Rev.D76:013009,2007',
        'doi': '10.1103/PhysRevD.76.013009',
        'categories': 'hep-ph',
        'abstract': '  A fully differential calculation in perturbative quantum chromodynamics is\npresented for the production of massive photon pairs at hadron colliders. All\nnext-to-leading order perturbative contributions from quark-antiquark,\ngluon-(anti)quark, and gluon-gluon subprocesses are included, as well as\nall-orders resummation of initial-state gluon radiation valid at\nnext-to-next-to-leading logarithmic accuracy. The region of phase space is\nspecified in which the calculation is most reliable. Good agreement is\ndemonstrated with data from the Fermilab Tevatron, and predictions are made for\nmore detailed tests with CDF and DO data. Predictions are shown for\ndistributions of diphoton pairs produced at the energy of the Large Hadron\nCollider (LHC). Distributions of the diphoton pairs from the decay of a Higgs\nboson are contrasted with those produced from QCD processes at the LHC, showing\nthat enhanced sensitivity to the signal can be obtained with judicious\nselection of events.\n',
        'versions': [{ 'version': 'v1', 'created': 'Mon, 2 Apr 2007 19:18:42 GMT' },
        { 'version': 'v2', 'created': 'Tue, 24 Jul 2007 20:10:27 GMT' }],
        'update_date': '2008-11-26',
        'authors_parsed': [['Balázs', 'C.', ''],
        ['Berger', 'E. L.', ''],
        ['Nadolsky', 'P. M.', ''],
        ['Yuan', 'C. -P.', '']]
    },
    {
        'id': '0704.0001',
        'submitter': 'Pavel Nadolsky',
        'authors': "C. Bal\\'azs, E. L. Berger, P. M. Nadolsky, C.-P. Yuan",
        'title': 'Calculation of prompt diphoton production cross sections at Tevatron and\n  LHC energies',
        'journal-ref': 'Phys.Rev.D76:013009,2007',
        'doi': '10.1103/PhysRevD.76.013009',
        'categories': 'hep-ph',
        'abstract': '  A fully differential calculation in perturbative quantum chromodynamics is\npresented for the production of massive photon pairs at hadron colliders. All\nnext-to-leading order perturbative contributions from quark-antiquark,\ngluon-(anti)quark, and gluon-gluon subprocesses are included, as well as\nall-orders resummation of initial-state gluon radiation valid at\nnext-to-next-to-leading logarithmic accuracy. The region of phase space is\nspecified in which the calculation is most reliable. Good agreement is\ndemonstrated with data from the Fermilab Tevatron, and predictions are made for\nmore detailed tests with CDF and DO data. Predictions are shown for\ndistributions of diphoton pairs produced at the energy of the Large Hadron\nCollider (LHC). Distributions of the diphoton pairs from the decay of a Higgs\nboson are contrasted with those produced from QCD processes at the LHC, showing\nthat enhanced sensitivity to the signal can be obtained with judicious\nselection of events.\n',
        'versions': [{ 'version': 'v1', 'created': 'Mon, 2 Apr 2007 19:18:42 GMT' },
        { 'version': 'v2', 'created': 'Tue, 24 Jul 2007 20:10:27 GMT' }],
        'update_date': '2008-11-26',
        'authors_parsed': [['Balázs', 'C.', ''],
        ['Berger', 'E. L.', ''],
        ['Nadolsky', 'P. M.', ''],
        ['Yuan', 'C. -P.', '']]
    },
    {
        'id': '0704.0001',
        'submitter': 'Pavel Nadolsky',
        'authors': "C. Bal\\'azs, E. L. Berger, P. M. Nadolsky, C.-P. Yuan",
        'title': 'Calculation of prompt diphoton production cross sections at Tevatron and\n  LHC energies',
        'journal-ref': 'Phys.Rev.D76:013009,2007',
        'doi': '10.1103/PhysRevD.76.013009',
        'categories': 'hep-ph',
        'abstract': '  A fully differential calculation in perturbative quantum chromodynamics is\npresented for the production of massive photon pairs at hadron colliders. All\nnext-to-leading order perturbative contributions from quark-antiquark,\ngluon-(anti)quark, and gluon-gluon subprocesses are included, as well as\nall-orders resummation of initial-state gluon radiation valid at\nnext-to-next-to-leading logarithmic accuracy. The region of phase space is\nspecified in which the calculation is most reliable. Good agreement is\ndemonstrated with data from the Fermilab Tevatron, and predictions are made for\nmore detailed tests with CDF and DO data. Predictions are shown for\ndistributions of diphoton pairs produced at the energy of the Large Hadron\nCollider (LHC). Distributions of the diphoton pairs from the decay of a Higgs\nboson are contrasted with those produced from QCD processes at the LHC, showing\nthat enhanced sensitivity to the signal can be obtained with judicious\nselection of events.\n',
        'versions': [{ 'version': 'v1', 'created': 'Mon, 2 Apr 2007 19:18:42 GMT' },
        { 'version': 'v2', 'created': 'Tue, 24 Jul 2007 20:10:27 GMT' }],
        'update_date': '2008-11-26',
        'authors_parsed': [['Balázs', 'C.', ''],
        ['Berger', 'E. L.', ''],
        ['Nadolsky', 'P. M.', ''],
        ['Yuan', 'C. -P.', '']]
    },
    {
        'id': '0704.0001',
        'submitter': 'Pavel Nadolsky',
        'authors': "C. Bal\\'azs, E. L. Berger, P. M. Nadolsky, C.-P. Yuan",
        'title': 'Calculation of prompt diphoton production cross sections at Tevatron and\n  LHC energies',
        'journal-ref': 'Phys.Rev.D76:013009,2007',
        'doi': '10.1103/PhysRevD.76.013009',
        'categories': 'hep-ph',
        'abstract': '  A fully differential calculation in perturbative quantum chromodynamics is\npresented for the production of massive photon pairs at hadron colliders. All\nnext-to-leading order perturbative contributions from quark-antiquark,\ngluon-(anti)quark, and gluon-gluon subprocesses are included, as well as\nall-orders resummation of initial-state gluon radiation valid at\nnext-to-next-to-leading logarithmic accuracy. The region of phase space is\nspecified in which the calculation is most reliable. Good agreement is\ndemonstrated with data from the Fermilab Tevatron, and predictions are made for\nmore detailed tests with CDF and DO data. Predictions are shown for\ndistributions of diphoton pairs produced at the energy of the Large Hadron\nCollider (LHC). Distributions of the diphoton pairs from the decay of a Higgs\nboson are contrasted with those produced from QCD processes at the LHC, showing\nthat enhanced sensitivity to the signal can be obtained with judicious\nselection of events.\n',
        'versions': [{ 'version': 'v1', 'created': 'Mon, 2 Apr 2007 19:18:42 GMT' },
        { 'version': 'v2', 'created': 'Tue, 24 Jul 2007 20:10:27 GMT' }],
        'update_date': '2008-11-26',
        'authors_parsed': [['Balázs', 'C.', ''],
        ['Berger', 'E. L.', ''],
        ['Nadolsky', 'P. M.', ''],
        ['Yuan', 'C. -P.', '']]
    },

]

export { name, tagline, categoryMap, categories, team, projectLinks, papers };