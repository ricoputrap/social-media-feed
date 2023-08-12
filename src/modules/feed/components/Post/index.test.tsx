import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Post, { Props } from '.';

describe("<Post />", () => {
  test("Post component renders correctly", () => {
    const mockPost: Props = {
      id: 1,
      content: 'This is a test post',
      createdTime: Date.now(),
      likes: [1, 2, 3],

      authorID: 1,
      authorName: 'John Doe',
      authorUsername: 'johndoe',

      isNew: true,
    };

    const { getByText, getByAltText } = render(<Post {...mockPost} />);

    // Check if author's name and username are rendered
    expect(getByText(mockPost.authorName)).toBeInTheDocument();
    expect(getByText(`@${mockPost.authorUsername}`)).toBeInTheDocument();


    // Check if post content is rendered
    expect(getByText(mockPost.content)).toBeInTheDocument();

    // Check if the profile picture is rendered
    const profilePic = getByAltText("profile-pic");
    expect(profilePic).toBeInTheDocument();
    expect(profilePic).toHaveAttribute("width", "30");
    expect(profilePic).toHaveAttribute("height", "30");

    // Check if the new post animation class is applied
    const postContainer = getByText(mockPost.content).parentElement;
    expect(postContainer).toHaveClass("animate-new-post");

    // Check if other classes are applied
    expect(postContainer).toHaveClass(
      'min-h-21', 'post-item', 'p-4', 'pt-3',
      'border-gray-200', 'border-2', 'rounded-xl'
    );
  });
})