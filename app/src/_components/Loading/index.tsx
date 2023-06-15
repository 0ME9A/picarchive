export default function Loading({ style }: { style?: string }) {
    return (
        <div className={`py-10 flex items-center justify-center w-full ${style}`}>
            <div className="w-8 aspect-square border-2 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}