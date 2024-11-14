import Image from 'next/image'

export default function AnimatedLogo({ isOpen }: { isOpen: boolean }) {
  return (
    <div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}
      >
        <Image
          src="/logo.png"
          alt="aqarat full logo"
          width={100}
          height={50}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'hidden opacity-0' : 'block opacity-100'
        }`}
      >
        <Image
          src="/icon.png"
          alt="aqarat icon"
          width={30}
          height={50}
          className=""
        />
      </div>
    </div>
  )
}
