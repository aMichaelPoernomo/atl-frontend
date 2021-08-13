export const createActionType = (name: string) => ({
  start: name,
  success: `${name}_SUCCESS`,
  failed: `${name}_FAILED`,
})
