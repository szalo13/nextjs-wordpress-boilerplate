import { memo } from "react";
import AvatarComponent, {
  IAvatarPropTypes,
} from "../../../../components/atoms/Avatar.component";

interface IBlogAuthorPropTypes {
  username: string;
  description: string;
  avatarProps?: IAvatarPropTypes;
}

const BlogAuthor = ({
  username,
  description,
  avatarProps,
}: IBlogAuthorPropTypes) => {
  return (
    <div className="flex items-center my-12 rounded-lg">
      {!!avatarProps && (
        <div className="avatar-wrapper mr-4">
          <AvatarComponent {...avatarProps} />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <span className="text-xl font-semibold text-gray-900">{username}</span>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
    </div>
  );
};

export default memo(BlogAuthor);
