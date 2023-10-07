export type AlgorithmApplication = {
    checkGraphRequirements: () => RequirementResponse;
    checkSimulationRequirements: () => RequirementResponse;
    launch: () => ProcessResponse;
};

export type ProcessResponse = {
    status: ReponseStatus;
    errorMessage?: string;
    graphState?: any;
};

export type RequirementResponse = {
    status: ReponseStatus;
    errorMessage?: string;
};

export type ReponseStatus = 'error' | 'success';
