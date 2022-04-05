export interface PortfolioViewModel {
    imgPath: string;
    descriptionText: string;
    technologyUsed: TechnologyUsed[];
    demo: Demo;
}

interface TechnologyUsed {
    technologyName: string;
    imgPath: string;
}

interface Demo {
    hasADemo: boolean;
    linkDemo: string;
}

