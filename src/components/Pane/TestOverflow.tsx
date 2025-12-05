import { useEffect, useState, useRef } from 'react'

export default function TestOverflow() {
  const [items, setItems] = useState<string[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [itemCount, setItemCount] = useState(10)

  // Function to generate random text
  const generateRandomText = () => {
    const phrases = [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco",
      "Laboris nisi ut aliquip ex ea",
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat cupidatat",
      "Sunt in culpa qui officia deserunt"
    ]
    
    // Get 1-3 random phrases
    const numPhrases = Math.floor(Math.random() * 3) + 1
    let text = ''
    
    for (let i = 0; i < numPhrases; i++) {
      const randomIndex = Math.floor(Math.random() * phrases.length)
      text += phrases[randomIndex] + '. '
    }
    
    return text
  }

  useEffect(() => {
    setItems(Array.from({ length: itemCount }, () => {
      return `${generateRandomText()}`
    }))
    
  }, [itemCount])

  useEffect(() => {
    setTimeout(() => {
      scrollContainerRef.current?.scrollTo({
        top: scrollContainerRef.current?.scrollHeight,
      })
    }, 0)
  }, [])

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    if (scrollContainer.scrollTop <= 100) {
      // Remember current scroll height and position
      const scrollHeight = scrollContainer.scrollHeight
      const scrollTop = scrollContainer.scrollTop
      
      // Add 10 more items to the top
      setItemCount(prevCount => prevCount + 10)
      setItems(prevItems => [
        ...Array.from({ length: 10 }, () => `${generateRandomText()}`),
        ...prevItems
      ])
      
      // After render, restore scroll position
      setTimeout(() => {
        if (scrollContainer) {
          const newScrollHeight = scrollContainer.scrollHeight
          scrollContainer.scrollTop = scrollTop + (newScrollHeight - scrollHeight)
        }
      }, 0)
    }
  }

  return (
    <div style={{
      width: '600px',
      height: '100%',
      overflow: 'hidden',
    }}>
      <div 
        ref={scrollContainerRef}
        className="test-overflow-items" 
        style={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          maxHeight: '500px',
        }}
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <div key={index} className="test-overflow-item" style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            backgroundColor: '#f0f0f0',
          }}>
            <div className="test-overflow-item-content">
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
