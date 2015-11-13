$(function() {
  var allTypes = [
    "Accounting/Finance",
    "Healthcare",
    "Non=Profit/Volunteering",
    "Administrative",
    "Computer/Internet",
    "Pharmaceutical/Bio=tech",
    "Arts/Entertainment/Publishing",
    "Hospitality/Travel",
    "Real Estate",
    "Banking/Loans",
    "Human Resources",
    "Restaurant/Food Service",
    "Construction/Facilities",
    "Insurance",
    "Retail",
    "Customer Service",
    "Law Enforcement/Security",
    "Sales",
    "Education/Training",
    "Legal",
    "Telecommunications",
    "Engineering/Architecture",
    "Manufacturing/Mechanical",
    "Transportation/Logistics",
    "Government/Military",
    "Marketing/Advertising/PR",
    "Upper Management/Consulting",
    "Accountants and Auditors",
    "Actors",
    "Actuaries",
    "Adhesive Bonding Machine Operators and Tenders",
    "Administrative Law Judges, Adjudicators, and Hearing Officers",
    "Administrative Services Managers",
    "Adult Basic and Secondary Education and Literacy Teachers and Instructors",
    "Advertising and Promotions Managers",
    "Advertising Sales Agents",
    "Aerospace Engineering and Operations Technicians",
    "Aerospace Engineers",
    "Agents and Business Managers of Artists, Performers, and Athletes",
    "Agricultural and Food Science Technicians",
    "Agricultural Engineers",
    "Agricultural Equipment Operators",
    "Agricultural Inspectors",
    "Agricultural Sciences Teachers, Postsecondary",
    "Agricultural Workers, All Other",
    "Air Traffic Controllers",
    "Aircraft Cargo Handling Supervisors",
    "Aircraft Mechanics and Service Technicians",
    "Aircraft Structure, Surfaces, Rigging, and Systems Assemblers",
    "Airfield Operations Specialists",
    "Airline Pilots, Copilots, and Flight Engineers",
    "All Occupations",
    "Ambulance Drivers and Attendants, Except Emergency Medical Technicians",
    "Amusement and Recreation Attendants",
    "Anesthesiologists",
    "Animal Breeders",
    "Animal Control Workers",
    "Animal Scientists",
    "Animal Trainers",
    "Anthropologists and Archeologists",
    "Anthropology and Archeology Teachers, Postsecondary",
    "Appraisers and Assessors of Real Estate",
    "Arbitrators, Mediators, and Conciliators",
    "Architects, Except Landscape and Naval",
    "Architectural and Civil Drafters",
    "Architectural and Engineering Managers",
    "Architecture and Engineering Occupations",
    "Architecture Teachers, Postsecondary",
    "Archivists",
    "Area, Ethnic, and Cultural Studies Teachers, Postsecondary",
    "Art Directors",
    "Art, Drama, and Music Teachers, Postsecondary",
    "Artists and Related Workers, All Other",
    "Arts, Design, Entertainment, Sports, and Media Occupations",
    "Assemblers and Fabricators, All Other",
    "Astronomers",
    "Athletes and Sports Competitors",
    "Athletic Trainers",
    "Atmospheric and Space Scientists",
    "Atmospheric, Earth, Marine, and Space Sciences Teachers, Postsecondary",
    "Audio and Video Equipment Technicians",
    "Audio-Visual and Multimedia Collections Specialists",
    "Audiologists",
    "Automotive and Watercraft Service Attendants",
    "Automotive Body and Related Repairers",
    "Automotive Glass Installers and Repairers",
    "Automotive Service Technicians and Mechanics",
    "Avionics Technicians",
    "Baggage Porters and Bellhops",
    "Bailiffs",
    "Bakers",
    "Barbers",
    "Bartenders",
    "Bicycle Repairers",
    "Bill and Account Collectors",
    "Billing and Posting Clerks",
    "Biochemists and Biophysicists",
    "Biological Science Teachers, Postsecondary",
    "Biological Scientists, All Other",
    "Biological Technicians",
    "Biomedical Engineers",
    "Boilermakers",
    "Bookkeeping, Accounting, and Auditing Clerks",
    "Brickmasons and Blockmasons",
    "Bridge and Lock Tenders",
    "Broadcast News Analysts",
    "Broadcast Technicians",
    "Brokerage Clerks",
    "Budget Analysts",
    "Building and Grounds Cleaning and Maintenance Occupations",
    "Building Cleaning Workers, All Other",
    "Bus and Truck Mechanics and Diesel Engine Specialists",
    "Bus Drivers, School or Special Client",
    "Bus Drivers, Transit and Intercity",
    "Business and Financial Operations Occupations",
    "Business Operations Specialists, All Other",
    "Business Teachers, Postsecondary",
    "Butchers and Meat Cutters",
    "Buyers and Purchasing Agents, Farm Products",
    "Cabinetmakers and Bench Carpenters",
    "Camera and Photographic Equipment Repairers",
    "Camera Operators, Television, Video, and Motion Picture",
    "Captains, Mates, and Pilots of Water Vessels",
    "Cardiovascular Technologists and Technicians",
    "Career/Technical Education Teachers, Middle School",
    "Career/Technical Education Teachers, Secondary School",
    "Cargo and Freight Agents",
    "Carpenters",
    "Carpet Installers",
    "Cartographers and Photogrammetrists",
    "Cashiers",
    "Cement Masons and Concrete Finishers",
    "Chefs and Head Cooks",
    "Chemical Engineers",
    "Chemical Equipment Operators and Tenders",
    "Chemical Plant and System Operators",
    "Chemical Technicians",
    "Chemistry Teachers, Postsecondary",
    "Chemists",
    "Chief Executives",
    "Child, Family, and School Social Workers",
    "Childcare Workers",
    "Chiropractors",
    "Choreographers",
    "Civil Engineering Technicians",
    "Civil Engineers",
    "Claims Adjusters, Examiners, and Investigators",
    "Cleaners of Vehicles and Equipment",
    "Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders",
    "Clergy",
    "Clinical, Counseling, and School Psychologists",
    "Coaches and Scouts",
    "Coating, Painting, and Spraying Machine Setters, Operators, and Tenders",
    "Coil Winders, Tapers, and Finishers",
    "Coin, Vending, and Amusement Machine Servicers and Repairers",
    "Combined Food Preparation and Serving Workers, Including Fast Food",
    "Commercial and Industrial Designers",
    "Commercial Divers",
    "Commercial Pilots",
    "Communications Equipment Operators, All Other",
    "Communications Teachers, Postsecondary",
    "Community and Social Service Occupations",
    "Community and Social Service Specialists, All Other",
    "Community Health Workers",
    "Compensation and Benefits Managers",
    "Compensation, Benefits, and Job Analysis Specialists",
    "Compliance Officers",
    "Computer and Information Research Scientists",
    "Computer and Information Systems Managers",
    "Computer and Mathematical Occupations",
    "Computer Hardware Engineers",
    "Computer Network Architects",
    "Computer Network Support Specialists",
    "Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic",
    "Computer Occupations, All Other",
    "Computer Operators",
    "Computer Programmers",
    "Computer Science Teachers, Postsecondary",
    "Computer Systems Analysts",
    "Computer User Support Specialists",
    "Computer-Controlled Machine Tool Operators, Metal and Plastic",
    "Computer, Automated Teller, and Office Machine Repairers",
    "Concierges",
    "Conservation Scientists",
    "Construction and Building Inspectors",
    "Construction and Extraction Occupations",
    "Construction and Related Workers, All Other",
    "Construction Laborers",
    "Construction Managers",
    "Continuous Mining Machine Operators",
    "Control and Valve Installers and Repairers, Except Mechanical Door",
    "Conveyor Operators and Tenders",
    "Cooks, All Other",
    "Cooks, Fast Food",
    "Cooks, Institution and Cafeteria",
    "Cooks, Restaurant",
    "Cooks, Short Order",
    "Cooling and Freezing Equipment Operators and Tenders",
    "Correctional Officers and Jailers",
    "Correspondence Clerks",
    "Cost Estimators",
    "Costume Attendants",
    "Counselors, All Other",
    "Counter and Rental Clerks",
    "Counter Attendants, Cafeteria, Food Concession, and Coffee Shop",
    "Couriers and Messengers",
    "Court Reporters",
    "Court, Municipal, and License Clerks",
    "Craft Artists",
    "Crane and Tower Operators",
    "Credit Analysts",
    "Credit Authorizers, Checkers, and Clerks",
    "Credit Counselors",
    "Criminal Justice and Law Enforcement Teachers, Postsecondary",
    "Crossing Guards",
    "Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders",
    "Curators",
    "Customer Service Representatives",
    "Cutters and Trimmers, Hand",
    "Cutting and Slicing Machine Setters, Operators, and Tenders",
    "Cutting, Punching, and Press Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Dancers",
    "Data Entry Keyers",
    "Database Administrators",
    "Demonstrators and Product Promoters",
    "Dental Assistants",
    "Dental Hygienists",
    "Dental Laboratory Technicians",
    "Dentists, All Other Specialists",
    "Dentists, General",
    "Derrick Operators, Oil and Gas",
    "Designers, All Other",
    "Desktop Publishers",
    "Detectives and Criminal Investigators",
    "Diagnostic Medical Sonographers",
    "Dietetic Technicians",
    "Dietitians and Nutritionists",
    "Dining Room and Cafeteria Attendants and Bartender Helpers",
    "Directors, Religious Activities and Education",
    "Dishwashers",
    "Dispatchers, Except Police, Fire, and Ambulance",
    "Door-to-Door Sales Workers, News and Street Vendors, and Related Workers",
    "Drafters, All Other",
    "Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic",
    "Driver/Sales Workers",
    "Drywall and Ceiling Tile Installers",
    "Earth Drillers, Except Oil and Gas",
    "Economics Teachers, Postsecondary",
    "Economists",
    "Editors",
    "Education Administrators, All Other",
    "Education Administrators, Elementary and Secondary School",
    "Education Administrators, Postsecondary",
    "Education Administrators, Preschool and Childcare Center/Program",
    "Education Teachers, Postsecondary",
    "Education, Training, and Library Occupations",
    "Education, Training, and Library Workers, All Other",
    "Educational, Guidance, School, and Vocational Counselors",
    "Electric Motor, Power Tool, and Related Repairers",
    "Electrical and Electronic Equipment Assemblers",
    "Electrical and Electronics Drafters",
    "Electrical and Electronics Engineering Technicians",
    "Electrical and Electronics Installers and Repairers, Transportation Equipment",
    "Electrical and Electronics Repairers, Commercial and Industrial Equipment",
    "Electrical and Electronics Repairers, Powerhouse, Substation, and Relay",
    "Electrical Engineers",
    "Electrical Power-Line Installers and Repairers",
    "Electricians",
    "Electro-Mechanical Technicians",
    "Electromechanical Equipment Assemblers",
    "Electronic Equipment Installers and Repairers, Motor Vehicles",
    "Electronic Home Entertainment Equipment Installers and Repairers",
    "Electronics Engineers, Except Computer",
    "Elementary School Teachers, Except Special Education",
    "Elevator Installers and Repairers",
    "Eligibility Interviewers, Government Programs",
    "Embalmers",
    "Emergency Management Directors",
    "Emergency Medical Technicians and Paramedics",
    "Engine and Other Machine Assemblers",
    "Engineering Teachers, Postsecondary",
    "Engineering Technicians, Except Drafters, All Other",
    "Engineers, All Other",
    "English Language and Literature Teachers, Postsecondary",
    "Entertainers and Performers, Sports and Related Workers, All Other",
    "Entertainment Attendants and Related Workers, All Other",
    "Environmental Engineering Technicians",
    "Environmental Engineers",
    "Environmental Science and Protection Technicians, Including Health",
    "Environmental Science Teachers, Postsecondary",
    "Environmental Scientists and Specialists, Including Health",
    "Epidemiologists",
    "Etchers and Engravers",
    "Excavating and Loading Machine and Dragline Operators",
    "Executive Secretaries and Executive Administrative Assistants",
    "Exercise Physiologists",
    "Explosives Workers, Ordnance Handling Experts, and Blasters",
    "Extraction Workers, All Other",
    "Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Extruding and Forming Machine Setters, Operators, and Tenders, Synthetic and Glass Fibers",
    "Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders",
    "Fabric and Apparel Patternmakers",
    "Fabric Menders, Except Garment",
    "Fallers",
    "Family and General Practitioners",
    "Farm and Home Management Advisors",
    "Farm Equipment Mechanics and Service Technicians",
    "Farm Labor Contractors",
    "Farmers, Ranchers, and Other Agricultural Managers",
    "Farming, Fishing, and Forestry Occupations",
    "Farmworkers and Laborers, Crop, Nursery, and Greenhouse",
    "Farmworkers, Farm, Ranch, and Aquacultural Animals",
    "Fashion Designers",
    "Fence Erectors",
    "Fiberglass Laminators and Fabricators",
    "File Clerks",
    "Film and Video Editors",
    "Financial Analysts",
    "Financial Clerks, All Other",
    "Financial Examiners",
    "Financial Managers",
    "Financial Specialists, All Other",
    "Fine Artists, Including Painters, Sculptors, and Illustrators",
    "Fire Inspectors and Investigators",
    "Firefighters",
    "First-Line Supervisors of Construction Trades and Extraction Workers",
    "First-Line Supervisors of Correctional Officers",
    "First-Line Supervisors of Farming, Fishing, and Forestry Workers",
    "First-Line Supervisors of Fire Fighting and Prevention Workers",
    "First-Line Supervisors of Food Preparation and Serving Workers",
    "First-Line Supervisors of Helpers, Laborers, and Material Movers, Hand",
    "First-Line Supervisors of Housekeeping and Janitorial Workers",
    "First-Line Supervisors of Landscaping, Lawn Service, and Groundskeeping Workers",
    "First-Line Supervisors of Mechanics, Installers, and Repairers",
    "First-Line Supervisors of Non-Retail Sales Workers",
    "First-Line Supervisors of Office and Administrative Support Workers",
    "First-Line Supervisors of Personal Service Workers",
    "First-Line Supervisors of Police and Detectives",
    "First-Line Supervisors of Production and Operating Workers",
    "First-Line Supervisors of Protective Service Workers, All Other",
    "First-Line Supervisors of Retail Sales Workers",
    "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators",
    "Fish and Game Wardens",
    "Fishers and Related Fishing Workers",
    "Fitness Trainers and Aerobics Instructors",
    "Flight Attendants",
    "Floor Layers, Except Carpet, Wood, and Hard Tiles",
    "Floor Sanders and Finishers",
    "Floral Designers",
    "Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders",
    "Food Batchmakers",
    "Food Cooking Machine Operators and Tenders",
    "Food Preparation and Serving Related Occupations",
    "Food Preparation and Serving Related Workers, All Other",
    "Food Preparation Workers",
    "Food Processing Workers, All Other",
    "Food Scientists and Technologists",
    "Food Servers, Nonrestaurant",
    "Food Service Managers",
    "Foreign Language and Literature Teachers, Postsecondary",
    "Forensic Science Technicians",
    "Forest and Conservation Technicians",
    "Forest and Conservation Workers",
    "Forest Fire Inspectors and Prevention Specialists",
    "Foresters",
    "Forging Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Foundry Mold and Coremakers",
    "Fundraisers",
    "Funeral Attendants",
    "Funeral Service Managers",
    "Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders",
    "Furniture Finishers",
    "Gaming and Sports Book Writers and Runners",
    "Gaming Cage Workers",
    "Gaming Change Persons and Booth Cashiers",
    "Gaming Dealers",
    "Gaming Managers",
    "Gaming Service Workers, All Other",
    "Gaming Supervisors",
    "Gaming Surveillance Officers and Gaming Investigators",
    "Gas Compressor and Gas Pumping Station Operators",
    "Gas Plant Operators",
    "General and Operations Managers",
    "Genetic Counselors",
    "Geographers",
    "Geography Teachers, Postsecondary",
    "Geological and Petroleum Technicians",
    "Geoscientists, Except Hydrologists and Geographers",
    "Glaziers",
    "Graders and Sorters, Agricultural Products",
    "Graduate Teaching Assistants",
    "Graphic Designers",
    "Grinding and Polishing Workers, Hand",
    "Grinding, Lapping, Polishing, and Buffing Machine Tool Setters, Operators, and Tenders, Metal and Plastic",
    "Grounds Maintenance Workers, All Other",
    "Hairdressers, Hairstylists, and Cosmetologists",
    "Hazardous Materials Removal Workers",
    "Health and Safety Engineers, Except Mining Safety Engineers and Inspectors",
    "Health Diagnosing and Treating Practitioners, All Other",
    "Health Educators",
    "Health Specialties Teachers, Postsecondary",
    "Health Technologists and Technicians, All Other",
    "Healthcare Practitioners and Technical Occupations",
    "Healthcare Practitioners and Technical Workers, All Other",
    "Healthcare Social Workers",
    "Healthcare Support Occupations",
    "Healthcare Support Workers, All Other",
    "Hearing Aid Specialists",
    "Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic",
    "Heating, Air Conditioning, and Refrigeration Mechanics and Installers",
    "Heavy and Tractor-Trailer Truck Drivers",
    "Helpers--Brickmasons, Blockmasons, Stonemasons, and Tile and Marble Setters",
    "Helpers--Carpenters",
    "Helpers--Electricians",
    "Helpers--Extraction Workers",
    "Helpers--Installation, Maintenance, and Repair Workers",
    "Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons",
    "Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters",
    "Helpers--Production Workers",
    "Helpers--Roofers",
    "Helpers, Construction Trades, All Other",
    "Highway Maintenance Workers",
    "Historians",
    "History Teachers, Postsecondary",
    "Hoist and Winch Operators",
    "Home Appliance Repairers",
    "Home Economics Teachers, Postsecondary",
    "Home Health Aides",
    "Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop",
    "Hotel, Motel, and Resort Desk Clerks",
    "Human Resources Assistants, Except Payroll and Timekeeping",
    "Human Resources Managers",
    "Human Resources Specialists",
    "Hydrologists",
    "Industrial Engineering Technicians",
    "Industrial Engineers",
    "Industrial Machinery Mechanics",
    "Industrial Production Managers",
    "Industrial Truck and Tractor Operators",
    "Industrial-Organizational Psychologists",
    "Information and Record Clerks, All Other",
    "Information Security Analysts",
    "Inspectors, Testers, Sorters, Samplers, and Weighers",
    "Installation, Maintenance, and Repair Occupations",
    "Installation, Maintenance, and Repair Workers, All Other",
    "Instructional Coordinators",
    "Insulation Workers, Floor, Ceiling, and Wall",
    "Insulation Workers, Mechanical",
    "Insurance Appraisers, Auto Damage",
    "Insurance Claims and Policy Processing Clerks",
    "Insurance Sales Agents",
    "Insurance Underwriters",
    "Interior Designers",
    "Internists, General",
    "Interpreters and Translators",
    "Interviewers, Except Eligibility and Loan",
    "Janitors and Cleaners, Except Maids and Housekeeping Cleaners",
    "Jewelers and Precious Stone and Metal Workers",
    "Judges, Magistrate Judges, and Magistrates",
    "Judicial Law Clerks",
    "Kindergarten Teachers, Except Special Education",
    "Labor Relations Specialists",
    "Laborers and Freight, Stock, and Material Movers, Hand",
    "Landscape Architects",
    "Landscaping and Groundskeeping Workers",
    "Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic",
    "Laundry and Dry-Cleaning Workers",
    "Law Teachers, Postsecondary",
    "Lawyers",
    "Layout Workers, Metal and Plastic",
    "Legal Occupations",
    "Legal Secretaries",
    "Legal Support Workers, All Other",
    "Legislators",
    "Librarians",
    "Library Assistants, Clerical",
    "Library Science Teachers, Postsecondary",
    "Library Technicians",
    "Licensed Practical and Licensed Vocational Nurses",
    "Life Scientists, All Other",
    "Life, Physical, and Social Science Occupations",
    "Life, Physical, and Social Science Technicians, All Other",
    "Lifeguards, Ski Patrol, and Other Recreational Protective Service Workers",
    "Light Truck or Delivery Services Drivers",
    "Loading Machine Operators, Underground Mining",
    "Loan Interviewers and Clerks",
    "Loan Officers",
    "Locker Room, Coatroom, and Dressing Room Attendants",
    "Locksmiths and Safe Repairers",
    "Locomotive Engineers",
    "Lodging Managers",
    "Logging Equipment Operators",
    "Logisticians",
    "Machine Feeders and Offbearers",
    "Machinists",
    "Magnetic Resonance Imaging Technologists",
    "Maids and Housekeeping Cleaners",
    "Mail Clerks and Mail Machine Operators, Except Postal Service",
    "Maintenance and Repair Workers, General",
    "Maintenance Workers, Machinery",
    "Makeup Artists, Theatrical and Performance",
    "Management Analysts",
    "Management Occupations",
    "Managers, All Other",
    "Manicurists and Pedicurists",
    "Marine Engineers and Naval Architects",
    "Market Research Analysts and Marketing Specialists",
    "Marketing Managers",
    "Marriage and Family Therapists",
    "Massage Therapists",
    "Material Moving Workers, All Other",
    "Materials Engineers",
    "Materials Scientists",
    "Mathematical Science Occupations, All Other",
    "Mathematical Science Teachers, Postsecondary",
    "Mathematical Technicians",
    "Mathematicians",
    "Meat, Poultry, and Fish Cutters and Trimmers",
    "Mechanical Door Repairers",
    "Mechanical Drafters",
    "Mechanical Engineering Technicians",
    "Mechanical Engineers",
    "Media and Communication Equipment Workers, All Other",
    "Media and Communication Workers, All Other",
    "Medical and Clinical Laboratory Technicians",
    "Medical and Clinical Laboratory Technologists",
    "Medical and Health Services Managers",
    "Medical Appliance Technicians",
    "Medical Assistants",
    "Medical Equipment Preparers",
    "Medical Equipment Repairers",
    "Medical Records and Health Information Technicians",
    "Medical Scientists, Except Epidemiologists",
    "Medical Secretaries",
    "Medical Transcriptionists",
    "Meeting, Convention, and Event Planners",
    "Mental Health and Substance Abuse Social Workers",
    "Mental Health Counselors",
    "Merchandise Displayers and Window Trimmers",
    "Metal Workers and Plastic Workers, All Other",
    "Metal-Refining Furnace Operators and Tenders",
    "Meter Readers, Utilities",
    "Microbiologists",
    "Middle School Teachers, Except Special and Career/Technical Education",
    "Milling and Planing Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Millwrights",
    "Mine Cutting and Channeling Machine Operators",
    "Mine Shuttle Car Operators",
    "Mining and Geological Engineers, Including Mining Safety Engineers",
    "Mining Machine Operators, All Other",
    "Mixing and Blending Machine Setters, Operators, and Tenders",
    "Mobile Heavy Equipment Mechanics, Except Engines",
    "Model Makers, Metal and Plastic",
    "Model Makers, Wood",
    "Models",
    "Molders, Shapers, and Casters, Except Metal and Plastic",
    "Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Morticians, Undertakers, and Funeral Directors",
    "Motion Picture Projectionists",
    "Motor Vehicle Operators, All Other",
    "Motorboat Mechanics and Service Technicians",
    "Motorboat Operators",
    "Motorcycle Mechanics",
    "Multimedia Artists and Animators",
    "Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic",
    "Museum Technicians and Conservators",
    "Music Directors and Composers",
    "Musical Instrument Repairers and Tuners",
    "Musicians and Singers",
    "Natural Sciences Managers",
    "Network and Computer Systems Administrators",
    "New Accounts Clerks",
    "Nonfarm Animal Caretakers",
    "Nuclear Engineers",
    "Nuclear Medicine Technologists",
    "Nuclear Technicians",
    "Nurse Anesthetists",
    "Nurse Midwives",
    "Nurse Practitioners",
    "Nursing Assistants",
    "Nursing Instructors and Teachers, Postsecondary",
    "Obstetricians and Gynecologists",
    "OCC_TITLE",
    "Occupational Health and Safety Specialists",
    "Occupational Health and Safety Technicians",
    "Occupational Therapists",
    "Occupational Therapy Aides",
    "Occupational Therapy Assistants",
    "Office and Administrative Support Occupations",
    "Office and Administrative Support Workers, All Other",
    "Office Clerks, General",
    "Office Machine Operators, Except Computer",
    "Operating Engineers and Other Construction Equipment Operators",
    "Operations Research Analysts",
    "Ophthalmic Laboratory Technicians",
    "Ophthalmic Medical Technicians",
    "Opticians, Dispensing",
    "Optometrists",
    "Oral and Maxillofacial Surgeons",
    "Order Clerks",
    "Orderlies",
    "Orthodontists",
    "Orthotists and Prosthetists",
    "Outdoor Power Equipment and Other Small Engine Mechanics",
    "Packaging and Filling Machine Operators and Tenders",
    "Packers and Packagers, Hand",
    "Painters, Construction and Maintenance",
    "Painters, Transportation Equipment",
    "Painting, Coating, and Decorating Workers",
    "Paper Goods Machine Setters, Operators, and Tenders",
    "Paperhangers",
    "Paralegals and Legal Assistants",
    "Parking Enforcement Workers",
    "Parking Lot Attendants",
    "Parts Salespersons",
    "Patternmakers, Metal and Plastic",
    "Paving, Surfacing, and Tamping Equipment Operators",
    "Payroll and Timekeeping Clerks",
    "Pediatricians, General",
    "Personal Care Aides",
    "Personal Care and Service Occupations",
    "Personal Care and Service Workers, All Other",
    "Personal Financial Advisors",
    "Pest Control Workers",
    "Pesticide Handlers, Sprayers, and Applicators, Vegetation",
    "Petroleum Engineers",
    "Petroleum Pump System Operators, Refinery Operators, and Gaugers",
    "Pharmacists",
    "Pharmacy Aides",
    "Pharmacy Technicians",
    "Philosophy and Religion Teachers, Postsecondary",
    "Phlebotomists",
    "Photographers",
    "Photographic Process Workers and Processing Machine Operators",
    "Physical Scientists, All Other",
    "Physical Therapist Aides",
    "Physical Therapist Assistants",
    "Physical Therapists",
    "Physician Assistants",
    "Physicians and Surgeons, All Other",
    "Physicists",
    "Physics Teachers, Postsecondary",
    "Pile-Driver Operators",
    "Pipelayers",
    "Plant and System Operators, All Other",
    "Plasterers and Stucco Masons",
    "Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Plumbers, Pipefitters, and Steamfitters",
    "Podiatrists",
    "Police and Sheriff's Patrol Officers",
    "Police, Fire, and Ambulance Dispatchers",
    "Political Science Teachers, Postsecondary",
    "Political Scientists",
    "Postal Service Clerks",
    "Postal Service Mail Carriers",
    "Postal Service Mail Sorters, Processors, and Processing Machine Operators",
    "Postmasters and Mail Superintendents",
    "Postsecondary Teachers, All Other",
    "Pourers and Casters, Metal",
    "Power Distributors and Dispatchers",
    "Power Plant Operators",
    "Precision Instrument and Equipment Repairers, All Other",
    "Prepress Technicians and Workers",
    "Preschool Teachers, Except Special Education",
    "Pressers, Textile, Garment, and Related Materials",
    "Print Binding and Finishing Workers",
    "Printing Press Operators",
    "Private Detectives and Investigators",
    "Probation Officers and Correctional Treatment Specialists",
    "Procurement Clerks",
    "Producers and Directors",
    "Production Occupations",
    "Production Workers, All Other",
    "Production, Planning, and Expediting Clerks",
    "Proofreaders and Copy Markers",
    "Property, Real Estate, and Community Association Managers",
    "Protective Service Occupations",
    "Protective Service Workers, All Other",
    "Psychiatric Aides",
    "Psychiatric Technicians",
    "Psychiatrists",
    "Psychologists, All Other",
    "Psychology Teachers, Postsecondary",
    "Public Address System and Other Announcers",
    "Public Relations and Fundraising Managers",
    "Public Relations Specialists",
    "Pump Operators, Except Wellhead Pumpers",
    "Purchasing Agents, Except Wholesale, Retail, and Farm Products",
    "Purchasing Managers",
    "Radiation Therapists",
    "Radio and Television Announcers",
    "Radio Operators",
    "Radio, Cellular, and Tower Equipment Installers and Repairers",
    "Radiologic Technologists",
    "Rail Car Repairers",
    "Rail Transportation Workers, All Other",
    "Rail-Track Laying and Maintenance Equipment Operators",
    "Railroad Brake, Signal, and Switch Operators",
    "Real Estate Brokers",
    "Real Estate Sales Agents",
    "Receptionists and Information Clerks",
    "Recreation and Fitness Studies Teachers, Postsecondary",
    "Recreation Workers",
    "Recreational Therapists",
    "Recreational Vehicle Service Technicians",
    "Refractory Materials Repairers, Except Brickmasons",
    "Refuse and Recyclable Material Collectors",
    "Registered Nurses",
    "Rehabilitation Counselors",
    "Reinforcing Iron and Rebar Workers",
    "Religious Workers, All Other",
    "Reporters and Correspondents",
    "Reservation and Transportation Ticket Agents and Travel Clerks",
    "Residential Advisors",
    "Respiratory Therapists",
    "Respiratory Therapy Technicians",
    "Retail Salespersons",
    "Riggers",
    "Rock Splitters, Quarry",
    "Rolling Machine Setters, Operators, and Tenders, Metal and Plastic",
    "Roof Bolters, Mining",
    "Roofers",
    "Rotary Drill Operators, Oil and Gas",
    "Roustabouts, Oil and Gas",
    "Sailors and Marine Oilers",
    "Sales and Related Occupations",
    "Sales and Related Workers, All Other",
    "Sales Engineers",
    "Sales Managers",
    "Sales Representatives, Services, All Other",
    "Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific Products",
    "Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products",
    "Sawing Machine Setters, Operators, and Tenders, Wood",
    "Secondary School Teachers, Except Special and Career/Technical Education",
    "Secretaries and Administrative Assistants, Except Legal, Medical, and Executive",
    "Securities, Commodities, and Financial Services Sales Agents",
    "Security and Fire Alarm Systems Installers",
    "Security Guards",
    "Self-Enrichment Education Teachers",
    "Semiconductor Processors",
    "Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tenders",
    "Septic Tank Servicers and Sewer Pipe Cleaners",
    "Service Unit Operators, Oil, Gas, and Mining",
    "Set and Exhibit Designers",
    "Sewers, Hand",
    "Sewing Machine Operators",
    "Shampooers",
    "Sheet Metal Workers",
    "Ship Engineers",
    "Shipping, Receiving, and Traffic Clerks",
    "Shoe and Leather Workers and Repairers",
    "Shoe Machine Operators and Tenders",
    "Signal and Track Switch Repairers",
    "Skincare Specialists",
    "Slaughterers and Meat Packers",
    "Slot Supervisors",
    "Social and Community Service Managers",
    "Social and Human Service Assistants",
    "Social Science Research Assistants",
    "Social Sciences Teachers, Postsecondary, All Other",
    "Social Scientists and Related Workers, All Other",
    "Social Work Teachers, Postsecondary",
    "Social Workers, All Other",
    "Sociologists",
    "Sociology Teachers, Postsecondary",
    "Software Developers, Applications",
    "Software Developers, Systems Software",
    "Soil and Plant Scientists",
    "Solar Photovoltaic Installers",
    "Sound Engineering Technicians",
    "Special Education Teachers, All Other",
    "Special Education Teachers, Kindergarten and Elementary School",
    "Special Education Teachers, Middle School",
    "Special Education Teachers, Preschool",
    "Special Education Teachers, Secondary School",
    "Speech-Language Pathologists",
    "Stationary Engineers and Boiler Operators",
    "Statistical Assistants",
    "Statisticians",
    "Stock Clerks and Order Fillers",
    "Stonemasons",
    "Structural Iron and Steel Workers",
    "Structural Metal Fabricators and Fitters",
    "Substance Abuse and Behavioral Disorder Counselors",
    "Substitute Teachers",
    "Subway and Streetcar Operators",
    "Surgeons",
    "Surgical Technologists",
    "Survey Researchers",
    "Surveying and Mapping Technicians",
    "Surveyors",
    "Switchboard Operators, Including Answering Service",
    "Tailors, Dressmakers, and Custom Sewers",
    "Tank Car, Truck, and Ship Loaders",
    "Tapers",
    "Tax Examiners and Collectors, and Revenue Agents",
    "Tax Preparers",
    "Taxi Drivers and Chauffeurs",
    "Teacher Assistants",
    "Teachers and Instructors, All Other, Except Substitute Teachers",
    "Team Assemblers",
    "Technical Writers",
    "Telecommunications Equipment Installers and Repairers, Except Line Installers",
    "Telecommunications Line Installers and Repairers",
    "Telemarketers",
    "Telephone Operators",
    "Tellers",
    "Terrazzo Workers and Finishers",
    "Textile Bleaching and Dyeing Machine Operators and Tenders",
    "Textile Cutting Machine Setters, Operators, and Tenders",
    "Textile Knitting and Weaving Machine Setters, Operators, and Tenders",
    "Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tenders",
    "Textile, Apparel, and Furnishings Workers, All Other",
    "Therapists, All Other",
    "Tile and Marble Setters",
    "Timing Device Assemblers and Adjusters",
    "Tire Builders",
    "Tire Repairers and Changers",
    "Title Examiners, Abstractors, and Searchers",
    "Tool and Die Makers",
    "Tool Grinders, Filers, and Sharpeners",
    "Tour Guides and Escorts",
    "Traffic Technicians",
    "Training and Development Managers",
    "Training and Development Specialists",
    "Transportation and Material Moving Occupations",
    "Transportation Attendants, Except Flight Attendants",
    "Transportation Inspectors",
    "Transportation Security Screeners",
    "Transportation Workers, All Other",
    "Transportation, Storage, and Distribution Managers",
    "Travel Agents",
    "Travel Guides",
    "Tree Trimmers and Pruners",
    "Umpires, Referees, and Other Sports Officials",
    "Upholsterers",
    "Urban and Regional Planners",
    "Ushers, Lobby Attendants, and Ticket Takers",
    "Veterinarians",
    "Veterinary Assistants and Laboratory Animal Caretakers",
    "Veterinary Technologists and Technicians",
    "Vocational Education Teachers, Postsecondary",
    "Waiters and Waitresses",
    "Watch Repairers",
    "Water and Wastewater Treatment Plant and System Operators",
    "Web Developers",
    "Weighers, Measurers, Checkers, and Samplers, Recordkeeping",
    "Welders, Cutters, Solderers, and Brazers",
    "Welding, Soldering, and Brazing Machine Setters, Operators, and Tenders",
    "Wellhead Pumpers",
    "Wholesale and Retail Buyers, Except Farm Products",
    "Woodworkers, All Other",
    "Woodworking Machine Setters, Operators, and Tenders, Except Sawing",
    "Word Processors and Typists",
    "Writers and Authors",
    "Zoologists and Wildlife Biologists",


  ];
  $( '.allTypes' ).autocomplete({
    source: allTypes
  });
});
