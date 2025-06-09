
export type PluginTileProps = {
    name: string,
    enabled: boolean
}

const PluginTile = ({name, enabled}: PluginTileProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Status: {enabled ? "✅" : "❌"}</p>

            <p>
                <button>Włącz</button>
            </p>
        </div>
    )
}

export default PluginTile;