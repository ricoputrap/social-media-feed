import React, { ChangeEvent, useState } from 'react'
import usePostComposer from '../../hooks/usePostComposer'
import Button from '../Button';

interface Props {
  authorID: number;
}

const PostComposer: React.FC<Props> = ({ authorID }) => {
  const { isSubmitting, createNewPost } = usePostComposer();
  const [content, setContent] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length === 200) return;
    setContent(e.target.value);
  }

  const handleSubmit = async () => {
    await createNewPost(authorID, content);
    setContent("");
  }

  const adjustTextareaHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <div id="post-composer" className="flex flex-col gap-4 border-gray-200 border-2 px-4 pt-4 pb-3">
      <div className="border-gray-200 border-b-2 pb-2">
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="Share some thoughs?"
          onInput={adjustTextareaHeight}
          className="w-full focus:outline-none disabled:bg-transparent disabled:text-gray-300"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex flex-row-reverse">
        <Button
          label={isSubmitting ? "Sending..." : "Share"}
          variant="primary"
          isLoading={isSubmitting}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default PostComposer