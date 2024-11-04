export default function Pokemon({ name, image }) {
    return (
        <div className="flex items-center">
            <img src={image} alt={name} className="w-16 h-16" />
            <span className="ml-2">{name}</span>
        </div>
    );
}
