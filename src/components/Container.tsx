import clsx from 'clsx'
import Image, { type StaticImageData } from 'next/image'

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  innerClassName?: string
  children: React.ReactNode
  backgroundImage?: StaticImageData
  backgroundImageAlt?: string
  backgroundImageClassName?: string
  backgroundOverlayClassName?: string
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  innerClassName,
  children,
  backgroundImage,
  backgroundImageAlt = '',
  backgroundImageClassName,
  backgroundOverlayClassName,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        'mx-auto max-w-7xl px-6 lg:px-8',
        backgroundImage && 'relative isolate',
        className,
      )}
    >
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          aria-hidden={backgroundImageAlt.length === 0}
          className={clsx(
            'pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover',
            backgroundImageClassName,
          )}
          sizes="(min-width: 1024px) 80rem, 100vw"
        />
      ) : null}
      {backgroundImage && backgroundOverlayClassName ? (
        <div
          aria-hidden="true"
          className={clsx(
            'pointer-events-none absolute inset-0 -z-10',
            backgroundOverlayClassName,
          )}
        />
      ) : null}
      <div
        className={clsx(
          'relative z-10 mx-auto max-w-2xl lg:max-w-none',
          innerClassName,
        )}
      >
        {children}
      </div>
    </Component>
  )
}
