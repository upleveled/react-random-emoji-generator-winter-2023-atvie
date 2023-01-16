import nodeEmoji from 'node-emoji';
import { useState } from 'react';

export default function App() {
  const [emoji, setEmoji] = useState(nodeEmoji.random().emoji);
  const [emojiText, setEmojiText] = useState('');
  return (
    <div>
      <h1>Random Emoji Generator</h1>
      <button
        onClick={() => {
          setEmoji(nodeEmoji.random().emoji);
        }}
      >
        Generate
      </button>
      <br />
      <input
        value={emojiText}
        onChange={(event) => {
          setEmojiText(event.currentTarget.value);
          const chosenEmoji = nodeEmoji.find(event.currentTarget.value)?.emoji;
          console.log(chosenEmoji);
          setEmoji(chosenEmoji);
        }}
      />
      {emojiText && !nodeEmoji.hasEmoji(emojiText) ? (
        <div>Emoji not found</div>
      ) : (
        ''
      )}
      <div>Emoji: {emoji}</div>
    </div>
  );
}
