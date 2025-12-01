interface PressAssetProps {
    title: string;
    format: string;
    size: string;
    downloadUrl: string;
}

export default function PressAsset({ title, format, size, downloadUrl }: PressAssetProps) {
    return (
        <a
            href={downloadUrl}
            download
            className="block p-4 bg-rock-black border-2 border-rock-cream hover:bg-rock-darkgray transition-all group"
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-mono text-sm uppercase text-rock-cream font-bold tracking-wider">
                    {title}
                </h3>
                <svg
                    className="w-5 h-5 text-rock-red group-hover:translate-y-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
            </div>
            <div className="flex gap-4 font-mono text-xs text-rock-cream opacity-70">
                <span className="uppercase">{format}</span>
                <span>•</span>
                <span>{size}</span>
            </div>
        </a>
    );
}
