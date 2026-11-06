export type ProjectCategory = 'Solar' | 'Geothermal' | 'Hybrid' | 'Oil and Gas';

export type ProjectStatus =
    | 'Planning'
    | 'Development'
    | 'Implementation'
    | 'Commissioning';

export interface Project {
    slug: string;
    title: string;
    category: ProjectCategory;
    location: string;
    projectStatus: ProjectStatus;
    projectedCompletionDate: string;
    imageUrl: string;
    galleryImages: string[];
    description: string;
    fullDescription: string;
    technicalSpecs: {
        label: string;
        value: string;
    }[];
    stats: {
        label: string;
        value: string;
    }[];
    testimonial: {
        name: string;
        role: string;
        quote: string;
    };
}

export const projectsData: Project[] = [
    {
        slug: 'lagos-solar-hub',
        title: 'Lagos Solar Hub',
        category: 'Solar',
        location: 'Lagos, Nigeria',
        projectStatus: 'Implementation',
        projectedCompletionDate: '2027',
        imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60',
        galleryImages: [
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60',
            'https://images.unsplash.com/photo-1664828113992-8dd7a26275a0?w=500&auto=format&fit=crop&q=60',
            'https://plus.unsplash.com/premium_photo-1679500295214-ef105cc843a5?w=500&auto=format&fit=crop&q=60'
        ],
        description: 'A large-scale urban solar development designed to provide cleaner and more reliable daytime electricity to residential estates and small businesses across Lagos.',
        fullDescription: 'The Lagos Solar Hub is being developed as a phased renewable energy initiative aimed at reducing dependence on diesel-powered electricity generation. The project is planned to combine rooftop and ground-mounted solar installations with battery storage infrastructure. Implementation will progress through site assessments, system design, equipment installation and commissioning, with each phase contributing towards the project’s targeted generation capacity.',
        technicalSpecs: [
            { label: 'Target Capacity', value: '5.5 MW' },
            { label: 'Planned Solar Panels', value: '12,500 units' },
            { label: 'Proposed Battery Storage', value: '8 MWh' },
            { label: 'Projected Annual Output', value: '7,200 MWh' }
        ],
        stats: [
            { label: 'Projected Annual Energy Output', value: '7,200 MWh' },
            { label: 'Potential Homes Powered', value: '2,800+' },
            { label: 'Estimated Annual CO₂ Reduction', value: '4,800 tons' }
        ],
        testimonial: {
            name: 'Mrs. Funke Adebayo',
            role: 'Estate Manager, Lagos',
            quote: 'We are encouraged by the progress and planning behind the Lagos Solar Hub initiative. The phased implementation approach gives us confidence in its potential to provide a more dependable and sustainable energy solution for our community.'
        }
    },
    {
        slug: 'kaduna-hybrid-renewable-initiative',
        title: 'Kaduna Hybrid Renewable Initiative',
        category: 'Hybrid',
        location: 'Kaduna, Nigeria',
        projectStatus: 'Development',
        projectedCompletionDate: '2028',
        imageUrl: 'https://images.unsplash.com/photo-1641959166364-6c9b9898e804?w=500&auto=format&fit=crop&q=60',
        galleryImages: [
            'https://images.unsplash.com/photo-1641959166364-6c9b9898e804?w=500&auto=format&fit=crop&q=60'
        ],
        description: 'A proposed hybrid renewable energy development combining solar and geothermal technologies to support more consistent electricity generation in Kaduna.',
        fullDescription: 'The Kaduna Hybrid Renewable Initiative is being developed around the integration of solar generation and geothermal energy technologies. The project is structured to progress through resource assessment, feasibility studies, system design and phased infrastructure development. The proposed configuration is intended to combine daytime solar generation with a more consistent geothermal energy source, subject to technical and resource assessments. Its long-term objective is to establish a scalable renewable energy solution capable of supporting surrounding communities and commercial activities.',
        technicalSpecs: [
            { label: 'Target Capacity', value: '18 MW (12 MW Solar + 6 MW Geothermal)' },
            { label: 'Planned Solar Panels', value: '28,000 units' },
            { label: 'Proposed Geothermal Wells', value: '12' },
            { label: 'Proposed Battery Storage', value: '15 MWh' },
            { label: 'Projected Annual Output', value: '95,000 MWh' }
        ],
        stats: [
            { label: 'Projected Annual Energy Output', value: '95,000 MWh' },
            { label: 'Potential Homes Powered', value: '32,000+' },
            { label: 'Estimated Annual CO₂ Reduction', value: '68,000 tons' }
        ],
        testimonial: {
            name: 'Alhaji Ibrahim Musa',
            role: 'Community Leader, Kaduna',
            quote: 'The Kaduna Hybrid Renewable Initiative presents an encouraging opportunity for our community. We are particularly interested in the planned combination of renewable technologies and look forward to seeing the different implementation phases translate into a dependable energy solution.'
        }
    },
    {
        slug: 'delta-flare-gas-recovery-project',
        title: 'Delta Flare Gas Recovery Project',
        category: 'Oil and Gas',
        location: 'Delta, Nigeria',
        projectStatus: 'Implementation',
        projectedCompletionDate: '2027',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?w=500&auto=format&fit=crop&q=60',
        galleryImages: [
            'https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?w=500&auto=format&fit=crop&q=60',
            'https://plus.unsplash.com/premium_photo-1664304298826-57235ff43624?w=500&auto=format&fit=crop&q=60',
            'https://images.unsplash.com/photo-1648555394313-494797ad48fc?w=500&auto=format&fit=crop&q=60'
        ],
        description: 'A flare gas recovery development focused on capturing previously wasted natural gas, reducing harmful emissions and converting recovered gas into usable energy.',
        fullDescription: 'The Delta Flare Gas Recovery Project is being developed to address gas flaring and improve energy utilisation across selected oil and gas facilities in the Delta region. The proposed system will capture associated natural gas that would otherwise be flared and process it for productive use. Development is progressing through infrastructure assessment, recovery system design, pipeline planning and phased equipment installation. Once fully implemented, the project is expected to reduce emissions while providing additional energy resources for facility operations and surrounding communities.',
        technicalSpecs: [
            { label: 'Target Gas Recovery', value: '15 million SCF/day' },
            { label: 'Target Emissions Reduction', value: 'Up to 85%' },
            { label: 'Target Power Generation', value: '12 MW' },
            { label: 'Planned Pipeline Network', value: '8.5 km' },
            { label: 'Projected Annual Gas Recovery', value: '5.4 BCF' }
        ],
        stats: [
            { label: 'Target Power Generation', value: '12 MW' },
            { label: 'Potential Homes Powered', value: '10,000+' },
            { label: 'Estimated Annual CO₂ Reduction', value: '250,000 tons' }
        ],
        testimonial: {
            name: 'Ejiroghene David Oghene',
            role: 'Operations Director, Delta',
            quote: 'The project presents an important opportunity to improve how we manage and utilise natural gas resources. We are encouraged by the proposed recovery infrastructure and the progress towards a more efficient and environmentally responsible operation.'
        }
    },
    {
        slug: 'port-harcourt-pipeline-monitoring-network',
        title: 'Port Harcourt Pipeline Monitoring Network',
        category: 'Oil and Gas',
        location: 'Rivers, Nigeria',
        projectStatus: 'Development',
        projectedCompletionDate: '2027',
        imageUrl: 'https://media.istockphoto.com/id/1381376333/photo/oil-refinery-and-pipeline.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q4KX-IoHcvCpeSKtCOw8BGWVfWoFD4gInt6FUnJjIeQ=',
        galleryImages: [
            'https://media.istockphoto.com/id/1381376333/photo/oil-refinery-and-pipeline.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q4KX-IoHcvCpeSKtCOw8BGWVfWoFD4gInt6FUnJjIeQ=',
            'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=500&auto=format&fit=crop&q=60'
        ],
        description: 'An intelligent pipeline monitoring development designed to improve infrastructure safety through IoT-enabled leak detection and real-time operational monitoring.',
        fullDescription: 'The Port Harcourt Pipeline Monitoring Network is being developed to strengthen the monitoring and maintenance of critical oil and gas pipeline infrastructure. The proposed system will integrate fibre-optic sensors, monitoring stations and AI-assisted analytics to support early leak detection and operational efficiency. The project is structured around pipeline assessments, sensor network planning, technology integration and phased deployment across selected pipeline sections. Its intended outcome is a more responsive monitoring system that helps reduce environmental risks and infrastructure losses.',
        technicalSpecs: [
            { label: 'Target Pipeline Coverage', value: '120 km' },
            { label: 'Planned Sensors', value: '2,400 units' },
            { label: 'Target Leak Detection Time', value: 'Under 30 seconds' },
            { label: 'Proposed Monitoring Stations', value: '8 locations' },
            { label: 'Target Incident Reduction', value: 'Up to 90%' }
        ],
        stats: [
            { label: 'Target Pipeline Coverage', value: '120 km' },
            { label: 'Planned Monitoring Stations', value: '8 locations' },
            { label: 'Target Incident Reduction', value: 'Up to 90%' }
        ],
        testimonial: {
            name: 'Dr. Grace Amadi',
            role: 'Environmental Compliance Officer',
            quote: 'The proposed pipeline monitoring network offers a promising approach to improving environmental protection and operational oversight. We look forward to the integration of intelligent monitoring technologies that can help identify potential issues earlier and support more effective responses.'
        }
    },
    {
        slug: 'bonny-island-lng-efficiency-upgrade',
        title: 'Bonny Island LNG Efficiency Upgrade',
        category: 'Oil and Gas',
        location: 'Rivers, Nigeria',
        projectStatus: 'Planning',
        projectedCompletionDate: '2028',
        imageUrl: 'https://images.unsplash.com/photo-1633155617309-6201a8096e8a?w=500&auto=format&fit=crop&q=60',
        galleryImages: [
            'https://images.unsplash.com/photo-1633155617309-6201a8096e8a?w=500&auto=format&fit=crop&q=60',
            'https://images.unsplash.com/photo-1722183704200-e96339975ba4?w=500&auto=format&fit=crop&q=60'
        ],
        description: 'An energy efficiency upgrade initiative focused on improving LNG facility performance through waste heat recovery, compressor optimisation and modern energy management systems.',
        fullDescription: 'The Bonny Island LNG Efficiency Upgrade is being developed as an energy optimisation initiative aimed at improving the performance of existing LNG infrastructure. The proposed improvements include waste heat recovery systems, variable frequency drives and compressor optimisation technologies. The project will progress through facility assessments, engineering design, equipment selection and phased integration into existing operations. These improvements are expected to reduce energy consumption, improve operational efficiency and support increased production capacity over time.',
        technicalSpecs: [
            { label: 'Target Energy Savings', value: 'Up to 35%' },
            { label: 'Proposed Waste Heat Recovery', value: '45 MW' },
            { label: 'Target LNG Output Improvement', value: 'Up to 15%' },
            { label: 'Planned Compressor Upgrades', value: '12 units' },
            { label: 'Estimated Project Duration', value: '18 months' }
        ],
        stats: [
            { label: 'Target Energy Savings', value: 'Up to 35%' },
            { label: 'Proposed Waste Heat Recovery', value: '45 MW' },
            { label: 'Potential LNG Output Improvement', value: 'Up to 15%' }
        ],
        testimonial: {
            name: 'Engr. Bamidele Adeyemi',
            role: 'Facility Manager, Bonny Island',
            quote: 'The proposed efficiency improvements offer significant potential for our facility. We are particularly interested in the waste heat recovery and compressor optimisation components, which could contribute to better energy utilisation and long-term operational performance.'
        }
    }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projectsData.find((project) => project.slug === slug);
};

export const getAllProjects = (): Project[] => {
    return projectsData;
};

export const getProjectsByCategory = (category: string): Project[] => {
    if (category === 'All') return projectsData;

    return projectsData.filter((project) => project.category === category);
};