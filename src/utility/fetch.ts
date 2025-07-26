// src/api.ts
export const fetchCourseData = async (lang = 'en') => {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'Accept': 'application/json',
      },
    }
  )
  return res.json()
}
