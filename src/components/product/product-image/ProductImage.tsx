import Image from "next/image";

interface Props {
    src?: string;
    alt: string;
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
    style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
    width: number;
    height: number;
}

export const ProductImage = ({
    src,
    alt,
    className,
    style,
    width,
    height
}: Props) => {

    const loacalSrc = (src)
        ? src.startsWith('http')
            ? src
            : `/products/${src}`
        : '/imgs/placeholder.jpg';

    return (
        <Image
            src={loacalSrc}
            width={width}
            height={height}
            alt={alt}
            className={className}
            style={style}
        />
    )
}
