import Avatar from "@/ui/Avatar";

type AuthorProps = {
  avatarUrl: string;
  name: string;
};
const Author: React.FC<AuthorProps> = ({ avatarUrl, name }) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar src={avatarUrl} alt={name} />
      <span className="text-sm text-gray-600">{name}</span>
    </div>
  );
};
export default Author;
