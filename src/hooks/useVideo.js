import { useEffect, useState } from 'react'
import { options } from '../services/Api/API'

export function useVideo({ url }) {
    const [video, setvideo] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(url, options)
                const data = await response.json()
                const video = data.results
                setvideo(video)
            } catch (error) {
                console.log(error)
            }
        }

        fetchVideos()
    }, [url])

    return video
}
