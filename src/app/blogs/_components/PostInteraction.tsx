import { Button } from "@/ui/button";
import { toPersianDigits } from "@/utils/numberFormatter";
import { Bookmark, Heart, MessageSquare } from "lucide-react";

type comentsCountProps = {
  commentsCount: number;
};
const PostInteraction: React.FC<comentsCountProps> = ({ commentsCount }) => {
  return (
    <div className="flex gap-3">
      <Button variant="outline" size="sm">
        <MessageSquare /> {toPersianDigits(commentsCount)}
      </Button>
      <Button variant="outline" size="sm">
        <Heart />
      </Button>
      <Button variant="outline" size="sm">
        <Bookmark />
      </Button>
    </div>
  );
};
export default PostInteraction;
