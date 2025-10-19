import Image from "next/image"

interface EboardMember {
  id: number
  pronouns: string
  name: string
  title: string
  year: string
  major: string
  bio: string
  image: string
  alt: string
  email: string
}

interface EboardMemberCardProps {
  member: EboardMember
}

export function EboardMemberCard({ member }: EboardMemberCardProps) {

  console.log("Eboard Member:", member.image);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Member Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={member.alt || member.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Member Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-blue-600 font-semibold text-lg">{member.title}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <span>{member.year}</span>
            <span>•</span>
            <span>{member.major}</span>
            <span>•</span>
          </div>
          <div className="text-sm text-gray-600">
            <span>{member.pronouns}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>

        {/* Contact */}
        {/* Comment out for now. */}
        {/* <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${member.email}`} className="text-sm font-medium">
            Contact
          </a>
        </div>*/}
      </div> 
    </div>
  )
}
