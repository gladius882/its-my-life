type HookCallback = (...args: any[]) => any;
const hooks: Record<string, HookCallback[]> = {};

export function registerHook(hookName: string, fn: HookCallback) {
    hooks[hookName] = hooks[hookName] || [];
    hooks[hookName].push(fn);
}

export function callHook(hookName: string, ...args: any[]) {
    return (hooks[hookName] || []).map(fn => fn(...args));
}
