import PropTypes from "prop-types";

export default function ThreadItem({ thread }) {
  const authorName = thread.author?.name || "Unknown author";
  const avatarUrl = thread.author?.avatarUrl || "/placeholder-avatar.svg";
  const commentCount = thread._count?.comments ?? 0;

  return (
    <li className="thread">
      <div className="thread-top">
        <img
          className="avatar"
          src={avatarUrl}
          alt={thread.author?.name ? `${authorName}'s avatar` : "Author avatar placeholder"}
        />

        <div className="thread-main">
          <h3>{thread.title}</h3>
          <p className="meta">by {authorName}</p>
        </div>

        <span className="badge">
          {commentCount} {commentCount === 1 ? "reply" : "replies"}
        </span>
      </div>

      <p>{thread.body}</p>
    </li>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
        avatarUrl: PropTypes.string,
      }),
      PropTypes.oneOf([null]),
    ]),
    _count: PropTypes.shape({
      comments: PropTypes.number,
    }),
  }).isRequired,
};
