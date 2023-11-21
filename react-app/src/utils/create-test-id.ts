export const createTestIdSelector =
  (mainEntityName: string) => (entityPath: string) => {
    return `${mainEntityName}.${entityPath}`;
  };
