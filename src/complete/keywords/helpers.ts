export function getCompletions(labels: readonly string[]) {
    return labels.map(label => ({
        label,
        type: "keyword" as const
    }));
}