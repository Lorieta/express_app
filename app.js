const data = JSON.stringify({
    script: 'Welcome to our YouTube channel where we will guide you through an exciting 2-day itinerary to visit Bali. Day 1, start your morning by exploring the iconic Tanah Lot temple and enjoy the stunning sunrise views. Afterward, head to the laid-back town of Ubud, where you can visit the famous Monkey Forest and experience the traditional Balinese culture. For lunch, try the local delicacies at one of the many Warungs (small local restaurants) in Ubud. In the afternoon, make your way to Tegalalang Rice Terrace, a beautiful and breathtaking sight that will surely leave you in awe. Next, visit the Ubud Art Market and shop for unique souvenirs, handmade crafts, and beautiful artwork created by local artisans. Before dinner, take a yoga class or indulge in a relaxing Balinese massage to unwind and rejuvenate. On day 2, start your morning with a trip to the stunning Tirta Gangga water palace and enjoy serenity surrounded by beautiful water gardens. Afterward, head to the Tegenungan Waterfall and take a refreshing dip in the crystal-clear water. For lunch, try the famous Babi Guling (suckling pig) at Ibu Oka, a well-known restaurant in Ubud. In the afternoon, visit the incredible Uluwatu Temple and be amazed by its cliffside location and panoramic ocean views. Stay until sunset and witness the mesmerizing Kecak Fire Dance performance. Before your trip ends, don\'t forget to enjoy a seafood dinner at Jimbaran Bay, where you can feast on fresh catch while enjoying the beautiful beach atmosphere. That concludes our 2-day itinerary to visit Bali, packed with incredible sights, cultural experiences, and mouthwatering food. Make sure to subscribe to our channel for more travel tips and amazing destinations.',
    dimension: '16:9',
  });
  
  const apiKey = '577d3cc7damshd37997e5879589bp1c7bbejsnfbbe44d8af83'; // Replace with your actual API key
  const apiHost = 'text-to-video.p.rapidapi.com';
  
  async function createVideo() {
    try {
      const response = await fetch(`https://${apiHost}/v3/process_text_and_search_media`, {
        method: 'POST',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiHost,
          'Content-Type': 'application/json',
        },
        body: data,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Response:', result);
    } catch (error) {
      console.error('Erererror:', error.message);
    }
  }
  
  createVideo();
  