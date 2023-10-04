export type Mods = Record<string, boolean | string | undefined>;

const classNames = (
    cls: string, mods: Mods = {}, additional: Array<string | undefined> = [],
    ): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ').trimEnd();

export { classNames };
