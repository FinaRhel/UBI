type Mods = Record<string, boolean | string>;

const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ').trimEnd();

export { classNames };
