export interface Profile {
    id: string;
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    bio: string;
    connections: number;
}

export const MOCK_PROFILES: Profile[] = [
    {
        id: '1',
        name: 'Sarah Chen',
        title: 'Senior Software Engineer',
        company: 'TechCorp',
        imageUrl: 'https://picsum.photos/id/64/400',
        bio: 'Full-stack developer specializing in cloud architecture and distributed systems. Leading technical initiatives in AI/ML integration.',
        connections: 500
    },
    {
        id: '2',
        name: 'James Wilson',
        title: 'Product Manager',
        company: 'Innovation Labs',
        imageUrl: 'https://picsum.photos/id/65/400',
        bio: 'Strategic product leader with focus on AI/ML solutions. 10+ years experience in tech product management.',
        connections: 750
    },
    {
        id: '3',
        name: 'Maria Garcia',
        title: 'UX Research Lead',
        company: 'DesignFlow',
        imageUrl: 'https://picsum.photos/id/62/400',
        bio: 'Passionate about creating user-centered designs through research and data-driven decisions.',
        connections: 420
    },
    {
        id: '4',
        name: 'Alex Kumar',
        title: 'DevOps Engineer',
        company: 'CloudScale',
        imageUrl: 'https://picsum.photos/id/63/400',
        bio: 'Infrastructure automation expert. Kubernetes certified administrator. Building reliable, scalable systems.',
        connections: 630
    },
    {
        id: '5',
        name: 'Emily Zhang',
        title: 'Data Scientist',
        company: 'DataMinds',
        imageUrl: 'https://picsum.photos/id/66/400',
        bio: 'PhD in Machine Learning. Solving complex business problems through advanced analytics and AI.',
        connections: 890
    },
    {
        id: '6',
        name: 'Michael Patel',
        title: 'Solutions Architect',
        company: 'Enterprise Solutions',
        imageUrl: 'https://picsum.photos/id/67/400',
        bio: 'Enterprise architect with expertise in digital transformation and cloud migration strategies.',
        connections: 920
    },
    {
        id: '7',
        name: 'Sofia Rodriguez',
        title: 'Frontend Developer',
        company: 'WebCraft',
        imageUrl: 'https://picsum.photos/id/68/400',
        bio: 'Creating beautiful, responsive web applications. React and Vue.js expert.',
        connections: 480
    },
    {
        id: '8',
        name: 'David Kim',
        title: 'Security Engineer',
        company: 'SecureNet',
        imageUrl: 'https://picsum.photos/id/69/400',
        bio: 'Cybersecurity professional focused on application security and threat detection.',
        connections: 670
    },
    {
        id: '9',
        name: 'Rachel Foster',
        title: 'Agile Coach',
        company: 'Agile Minds',
        imageUrl: 'https://picsum.photos/id/70/400',
        bio: 'Helping teams embrace agile methodologies and improve delivery processes.',
        connections: 830
    },
    {
        id: '10',
        name: 'Omar Hassan',
        title: 'Mobile Developer',
        company: 'AppWorks',
        imageUrl: 'https://picsum.photos/id/71/400',
        bio: 'iOS and Android developer creating native mobile experiences.',
        connections: 540
    },
    {
        id: '11',
        name: 'Lisa Wang',
        title: 'Technical Lead',
        company: 'CodeCraft',
        imageUrl: 'https://picsum.photos/id/72/400',
        bio: 'Leading development teams in building scalable enterprise solutions.',
        connections: 780
    },
    {
        id: '12',
        name: 'Marcus Johnson',
        title: 'Blockchain Developer',
        company: 'ChainTech',
        imageUrl: 'https://picsum.photos/id/73/400',
        bio: 'Building decentralized applications and smart contracts.',
        connections: 460
    },
    {
        id: '13',
        name: 'Anna Kowalski',
        title: 'Quality Engineer',
        company: 'QualityFirst',
        imageUrl: 'https://picsum.photos/id/74/400',
        bio: 'Ensuring software quality through automated testing and CI/CD practices.',
        connections: 590
    },
    {
        id: '14',
        name: 'Carlos Mendoza',
        title: 'Systems Engineer',
        company: 'SysOps',
        imageUrl: 'https://picsum.photos/id/75/400',
        bio: 'Managing and optimizing complex infrastructure systems.',
        connections: 710
    },
    {
        id: '15',
        name: 'Nina Patel',
        title: 'UI Designer',
        company: 'PixelPerfect',
        imageUrl: 'https://picsum.photos/id/76/400',
        bio: 'Creating intuitive and beautiful user interfaces for web and mobile.',
        connections: 840
    },
    {
        id: '16',
        name: 'Thomas Schmidt',
        title: 'Backend Developer',
        company: 'ServerLogic',
        imageUrl: 'https://picsum.photos/id/77/400',
        bio: 'Building robust APIs and microservices architectures.',
        connections: 620
    },
    {
        id: '17',
        name: 'Yuki Tanaka',
        title: 'ML Engineer',
        company: 'AI Solutions',
        imageUrl: 'https://picsum.photos/id/78/400',
        bio: 'Implementing machine learning models for production environments.',
        connections: 730
    },
    {
        id: '18',
        name: 'Emma Brown',
        title: 'Product Designer',
        company: 'DesignHub',
        imageUrl: 'https://picsum.photos/id/79/400',
        bio: 'Creating user-centered product experiences through design thinking.',
        connections: 890
    },
    {
        id: '19',
        name: 'Ahmed Ali',
        title: 'Cloud Architect',
        company: 'CloudWorks',
        imageUrl: 'https://picsum.photos/id/80/400',
        bio: 'Designing and implementing cloud-native solutions.',
        connections: 940
    },
    {
        id: '20',
        name: 'Isabella Silva',
        title: 'Data Engineer',
        company: 'DataFlow',
        imageUrl: 'https://picsum.photos/id/81/400',
        bio: 'Building data pipelines and analytics infrastructure.',
        connections: 560
    },
    {
        id: '21',
        name: 'Kevin O\'Brien',
        title: 'Game Developer',
        company: 'GameCraft',
        imageUrl: 'https://picsum.photos/id/82/400',
        bio: 'Creating immersive gaming experiences using Unity and Unreal Engine.',
        connections: 470
    },
    {
        id: '22',
        name: 'Priya Sharma',
        title: 'Technical PM',
        company: 'TechLead',
        imageUrl: 'https://picsum.photos/id/83/400',
        bio: 'Managing technical projects and bridging business with engineering.',
        connections: 850
    },
    {
        id: '23',
        name: 'Daniel Lee',
        title: 'AR/VR Developer',
        company: 'RealityLabs',
        imageUrl: 'https://picsum.photos/id/84/400',
        bio: 'Developing augmented and virtual reality applications.',
        connections: 380
    },
    {
        id: '24',
        name: 'Fatima Al-Sayed',
        title: 'Integration Specialist',
        company: 'SystemsConnect',
        imageUrl: 'https://picsum.photos/id/85/400',
        bio: 'Implementing enterprise system integrations and APIs.',
        connections: 720
    },
    {
        id: '25',
        name: 'Robert Chen',
        title: 'Performance Engineer',
        company: 'OptimizeNow',
        imageUrl: 'https://picsum.photos/id/86/400',
        bio: 'Optimizing application performance and user experience.',
        connections: 640
    }
];