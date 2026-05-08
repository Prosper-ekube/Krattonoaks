export type TechnicalSpec = {
    label: string
    value: string
}

export type Stat = {
    co2Reduction: string
    energyGenerated: string
    homesPowered: string
}

export type Testimonial = {
    name: string
    quote: string
    role: string
}

export type Project = {
    category: string
    completionDate: string
    description: string
    fullDescription?: string
    galleryImages: string[]
    imageUrl: string
    location: string
    slug: string
    stats: Stat
    technicalSpecs: TechnicalSpec[]
    testimonial?: Testimonial
    title: string
}

export const projectsData: Project[] = [
    {
        slug: 'lagos-solar-hub',
        title: 'Lagos Solar Hub',
        category: 'Solar',
        location: 'Lagos, Nigeria',
        completionDate: '2023',
        imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D',
        galleryImages: [
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1664828113992-8dd7a26275a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1679500295214-ef105cc843a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'A large-scale urban solar installation powering residential estates and small businesses in Lagos with clean, reliable daytime energy.',
        fullDescription: 'The Lagos Solar Hub is a flagship project showcasing Nigeria’s commitment to solar energy. Installed on rooftops and open lands, it reduces reliance on diesel generators and provides stable power during peak hours.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '5.5 MW' },
            { label: 'Solar Panels', value: '12,500 units' },
            { label: 'Battery Storage', value: '8 MWh' },
            { label: 'Annual Output', value: '7,200 MWh' }
        ],
        stats: {
            energyGenerated: '7,200 MWh/year',
            homesPowered: '2,800+',
            co2Reduction: '4,800 tons/year'
        },
        testimonial: {
            name: 'Mrs. Funke Adebayo',
            role: 'Estate Manager, Lagos',
            quote: 'Kratton Oaks has delivered an outstanding solar solution for us. Their expertise and professionalism have transformed our community with reliable clean energy.'
        }
    },
    {
        slug: 'accra-solar-park',
        title: 'Accra Solar Park',
        category: 'Solar',
        location: 'Accra, Ghana',
        completionDate: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D1200',
        galleryImages: [
            'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D1200',
            'https://images.unsplash.com/photo-1503495731986-41d521ecbb32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'Utility-scale solar farm supplying clean energy to commercial and residential areas in Greater Accra.',
        fullDescription: 'This project combines ground-mounted solar arrays with smart inverters, significantly cutting Ghana’s carbon footprint and supporting national energy security goals.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '15 MW' },
            { label: 'Solar Panels', value: '38,000 units' },
            { label: 'Battery Storage', value: '12 MWh' },
            { label: 'Annual Output', value: '22,500 MWh' }
        ],
        stats: {
            energyGenerated: '22,500 MWh/year',
            homesPowered: '8,500+',
            co2Reduction: '14,000 tons/year'
        },
        testimonial: {
            name: 'Kwame Ofori',
            role: 'Energy Director, Ghana',
            quote: 'Working with Kratton Oaks on the Accra Solar Park has been excellent. They executed a world-class project that is powering Ghana\'s future.'
        }
    },
    {
        slug: 'rotterdam-solar-fields',
        title: 'Rotterdam Solar Fields',
        category: 'Solar',
        location: 'Rotterdam, The Netherlands',
        completionDate: '2025',
        imageUrl: 'https://images.pexels.com/photos/13804966/pexels-photo-13804966.jpeg?auto=compress&cs=tinysrgb&w=1200',
        galleryImages: [
            'https://images.pexels.com/photos/13804966/pexels-photo-13804966.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xvc2UlMjB1cCUyMHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'Innovative floating and ground-mounted solar installation in the port city of Rotterdam.',
        fullDescription: 'Designed to maximize limited land use, this project integrates solar with existing infrastructure, contributing to the Netherlands’ ambitious renewable targets.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '28 MW' },
            { label: 'Solar Panels', value: '65,000 units' },
            { label: 'Battery Storage', value: '20 MWh' },
            { label: 'Annual Output', value: '31,000 MWh' }
        ],
        stats: {
            energyGenerated: '31,000 MWh/year',
            homesPowered: '9,000+',
            co2Reduction: '18,500 tons/year'
        },
        testimonial: {
            name: 'Anna van Dijk',
            role: 'Project Lead, Rotterdam',
            quote: 'Kratton Oaks truly impressed us with the Rotterdam Solar Fields. Their innovative approach and quality delivery exceeded all expectations.'
        }
    },
    {
        slug: 'rajasthan-solar-mega-park',
        title: 'Rajasthan Solar Mega Park',
        category: 'Solar',
        location: 'Rajasthan, India',
        completionDate: '2024',
        imageUrl: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200',
        galleryImages: [
            'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.unsplash.com/photo-1679046410011-b6bf7ce71f22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2xvc2UlMjB1cCUyMHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'One of India’s largest desert-based solar installations delivering utility-scale power.',
        fullDescription: 'Leveraging Rajasthan’s abundant sunshine, the project supplies clean energy to thousands of homes and industries while creating significant local employment.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '120 MW' },
            { label: 'Solar Panels', value: '280,000 units' },
            { label: 'Battery Storage', value: '45 MWh' },
            { label: 'Annual Output', value: '210,000 MWh' }
        ],
        stats: {
            energyGenerated: '210,000 MWh/year',
            homesPowered: '65,000+',
            co2Reduction: '145,000 tons/year'
        },
        testimonial: {
            name: 'Ramesh Sharma',
            role: 'Local Farmer & Beneficiary',
            quote: 'Kratton Oaks did a phenomenal job on the Rajasthan Solar Mega Park. Their execution in challenging conditions was outstanding.'
        }
    },
    // Geothermal Projects
    {
        slug: 'olkaria-geothermal-expansion',
        title: 'Olkaria Geothermal Expansion',
        category: 'Geothermal',
        location: 'Nakuru County, Kenya',
        completionDate: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1691927458684-8b30380b9412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww',
        galleryImages: [
            'https://images.unsplash.com/photo-1691927458684-8b30380b9412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'Expansion of Kenya’s largest geothermal field providing baseload renewable power.',
        fullDescription: 'Kenya leads Africa in geothermal energy. This expansion taps into the Rift Valley’s volcanic resources for stable, 24/7 clean electricity.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '85 MW' },
            { label: 'Wells', value: '42' },
            { label: 'Annual Output', value: '680,000 MWh' }
        ],
        stats: {
            energyGenerated: '680,000 MWh/year',
            homesPowered: '180,000+',
            co2Reduction: '420,000 tons/year'
        },
        testimonial: {
            name: 'Dr. Jane Mwangi',
            role: 'Geologist, KenGen',
            quote: 'Kratton Oaks has set a new standard with this geothermal expansion. Their technical expertise and commitment to excellence are unmatched.'
        }
    },
    {
        slug: 'upper-rhine-geothermal-plant',
        title: 'Upper Rhine Geothermal Plant',
        category: 'Geothermal',
        location: 'Baden-Württemberg, Germany',
        completionDate: '2025',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661898205432-d648667b9c76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
        galleryImages: [
            'https://plus.unsplash.com/premium_photo-1661898205432-d648667b9c76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1725408046951-b630889efdfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww'
        ],
        description: 'Deep geothermal project providing heat and power in Germany’s energy transition.',
        fullDescription: 'This plant uses advanced enhanced geothermal systems (EGS) to deliver renewable baseload energy and district heating.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '12 MW (electric) + 35 MW (thermal)' },
            { label: 'Depth', value: '4,800 meters' },
            { label: 'Annual Output', value: '95,000 MWh (electric)' }
        ],
        stats: {
            energyGenerated: '95,000 MWh/year (electric)',
            homesPowered: '28,000+',
            co2Reduction: '68,000 tons/year'
        },
        testimonial: {
            name: 'Thomas Müller',
            role: 'Mayor, Local Municipality',
            quote: 'We are extremely satisfied with Kratton Oaks’ work on the Upper Rhine Geothermal Plant. Professional, reliable, and highly competent team.'
        }
    },
    {
        slug: 'cooper-basin-hot-rock-project',
        title: 'Cooper Basin Hot Rock Project',
        category: 'Geothermal',
        location: 'South Australia, Australia',
        completionDate: '2023',
        imageUrl: 'https://images.unsplash.com/photo-1576053437895-4253b2d33985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww',
        galleryImages: [
            'https://images.unsplash.com/photo-1576053437895-4253b2d33985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww'
        ],
        description: 'Advanced enhanced geothermal system tapping Australia’s vast hot dry rock resources.',
        fullDescription: 'This pioneering project demonstrates the huge potential of geothermal energy across the Australian continent.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '25 MW' },
            { label: 'Wells', value: '18' },
            { label: 'Annual Output', value: '195,000 MWh' }
        ],
        stats: {
            energyGenerated: '195,000 MWh/year',
            homesPowered: '55,000+',
            co2Reduction: '135,000 tons/year'
        },
        testimonial: {
            name: 'Dr. Sarah Thompson',
            role: 'Project Director',
            quote: 'Kratton Oaks delivered an impressive geothermal project in Australia. Their innovation and execution have been outstanding from start to finish.'
        }
    },
    {
        slug: 'ghana-geothermal-pilot',
        title: 'Ghana Geothermal Pilot',
        category: 'Geothermal',
        location: 'Volta Region, Ghana',
        completionDate: '2026',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1741881052041-0bffd30a71e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
        galleryImages: [
            'https://plus.unsplash.com/premium_photo-1741881052041-0bffd30a71e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'First major geothermal exploration and pilot plant in West Africa.',
        fullDescription: 'Exploring Ghana’s geothermal potential along geological fault lines to complement hydro and solar resources.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '5 MW' },
            { label: 'Wells', value: '8' },
            { label: 'Annual Output', value: '38,000 MWh' }
        ],
        stats: {
            energyGenerated: '38,000 MWh/year',
            homesPowered: '12,000+',
            co2Reduction: '24,000 tons/year'
        },
        testimonial: {
            name: 'Dr. Akosua Mensah',
            role: 'Geothermal Scientist',
            quote: 'Kratton Oaks pioneered this geothermal pilot with excellence. Their expertise is helping shape Ghana’s renewable energy future.'
        }
    },
    // Hybrid Projects
    {
        slug: 'kaduna-hybrid-renewable-initiative',
        title: 'Kaduna Hybrid Renewable Initiative',
        category: 'Hybrid',
        location: 'Kaduna, Nigeria',
        completionDate: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1641959166364-6c9b9898e804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
        galleryImages: [
            'https://images.unsplash.com/photo-1641959166364-6c9b9898e804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            'https://images.pexels.com/photos/5350021/pexels-photo-5350021.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/11702098/pexels-photo-11702098.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        description: 'Blending solar and geothermal technologies for reliable round-the-clock power in Kaduna.',
        fullDescription: 'This hybrid system uses daytime solar generation complemented by stable geothermal baseload, setting a new standard for Nigerian renewable projects.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '18 MW (12 MW Solar + 6 MW Geothermal)' },
            { label: 'Solar Panels', value: '28,000 units' },
            { label: 'Geothermal Wells', value: '12' },
            { label: 'Battery Storage', value: '15 MWh' },
            { label: 'Annual Output', value: '95,000 MWh' }
        ],
        stats: {
            energyGenerated: '95,000 MWh/year',
            homesPowered: '32,000+',
            co2Reduction: '68,000 tons/year'
        },
        testimonial: {
            name: 'Alhaji Ibrahim Musa',
            role: 'Community Leader, Kaduna',
            quote: 'Kratton Oaks has done fantastic work on the Kaduna Hybrid Initiative. The system is reliable and their team is truly world-class.'
        }
    },
    {
        slug: 'eifel-solar-geothermal-park',
        title: 'Eifel Solar-Geothermal Park',
        category: 'Hybrid',
        location: 'Eifel Region, Germany',
        completionDate: '2025',
        imageUrl: 'https://images.unsplash.com/photo-1569410593054-c37f3c20c52d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww',
        galleryImages: [
            'https://images.unsplash.com/photo-1569410593054-c37f3c20c52d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww',
            'https://images.pexels.com/photos/13804966/pexels-photo-13804966.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        description: 'Combined solar arrays and geothermal wells delivering stable renewable energy in Western Germany.',
        fullDescription: 'Perfect synergy between variable solar and constant geothermal output, optimized with AI-driven energy management.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '45 MW (30 MW Solar + 15 MW Geothermal)' },
            { label: 'Annual Output', value: '165,000 MWh' }
        ],
        stats: {
            energyGenerated: '165,000 MWh/year',
            homesPowered: '48,000+',
            co2Reduction: '110,000 tons/year'
        },
        testimonial: {
            name: 'Dr. Lukas Becker',
            role: 'Project Engineer',
            quote: 'The Eifel Hybrid Park is a masterpiece thanks to Kratton Oaks. Their hybrid expertise and delivery quality are second to none.'
        }
    },
    {
        slug: 'lake-turkana-solar-geothermal-hybrid',
        title: 'Lake Turkana Solar-Geothermal Hybrid',
        category: 'Hybrid',
        location: 'Turkana County, Kenya',
        completionDate: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1591200834528-4050ce99fe78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
        galleryImages: [
            'https://images.unsplash.com/photo-1591200834528-4050ce99fe78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2VvdGhlcm1hbCUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1679952890714-7eead60c1c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xvc2UlMjB1cCUyMHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'
        ],
        description: 'Integrating world-class wind/solar resources with emerging geothermal in Northern Kenya.',
        fullDescription: 'This ambitious hybrid project maximizes Kenya’s diverse renewable potential in one integrated system.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '52 MW (35 MW Solar + 17 MW Geothermal)' },
            { label: 'Annual Output', value: '210,000 MWh' }
        ],
        stats: {
            energyGenerated: '210,000 MWh/year',
            homesPowered: '68,000+',
            co2Reduction: '145,000 tons/year'
        },
        testimonial: {
            name: 'Hon. Peter Loko',
            role: 'Governor\'s Energy Advisor',
            quote: 'Kratton Oaks successfully integrated solar and geothermal at Lake Turkana. Their work has been exceptional and highly impactful.'
        }
    },
    {
        slug: 'pilbara-solar-geothermal-station',
        title: 'Pilbara Solar-Geothermal Station',
        category: 'Hybrid',
        location: 'Pilbara, Australia',
        completionDate: '2025',
        imageUrl: 'https://images.unsplash.com/photo-1698752822107-69f8973936e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
        galleryImages: [
            'https://images.unsplash.com/photo-1698752822107-69f8973936e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdlb3RoZXJtYWwlMjBhbmQlMjBzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1611581372056-30cf28a7bd2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdlb3RoZXJtYWwlMjBwb3dlciUyMHBsYW50fGVufDB8fDB8fHww'
        ],
        description: 'Remote hybrid renewable system powering mining operations and communities in Western Australia.',
        fullDescription: 'Designed for harsh outback conditions, this hybrid delivers reliable power far from the main grid.',
        technicalSpecs: [
            { label: 'Total Capacity', value: '38 MW (25 MW Solar + 13 MW Geothermal)' },
            { label: 'Annual Output', value: '145,000 MWh' }
        ],
        stats: {
            energyGenerated: '145,000 MWh/year',
            homesPowered: '42,000+',
            co2Reduction: '98,000 tons/year'
        },
        testimonial: {
            name: 'Mark Thompson',
            role: 'Mine Operations Manager',
            quote: 'Kratton Oaks delivered a robust hybrid solution for the Pilbara. Their professionalism and technical capability are truly impressive.'
        }
    }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projectsData.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
    return projectsData
}

export const getProjectsByCategory = (category: string): Project[] => {
    if (category === 'All') return projectsData
    return projectsData.filter(project => project.category === category)
}