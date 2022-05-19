import Image from 'next/image'

export default function TeamMember({ firstname, lastname, occupation, photo }) {
  const fullName = `${firstname} ${lastname}`

  return (
    <div className='text-center'>
      <Image
        src={photo}
        width={165}
        height={165}
        alt={`A photo of ${fullName}`}
        className='rounded-full'
      />
      <h3 className='text-2xl'>{fullName}</h3>
      <p>{occupation}</p>
    </div>
  )
}
