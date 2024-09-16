import delve from "dlv";

export async function checkRequiredData(block) {
    return block;
}

export async function getDataDependencies(json) {
    let blocks = delve(json, "blocks", []);
    blocks = await Promise.all(blocks.map(checkRequiredData));
    return {
        ...json,
        blocks,
    };
}