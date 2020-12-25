import { useEffect, useState } from 'react'

const useRepositories = () => {
    const [repositories, setRepositories] = useState()
    const [loading, setLoading] = useState(false)

    const fetchRespositories = async () => {
        const response = await fetch('http://10.0.0.4:5000/api/repositories')
        const json = await response.json()
        setLoading(false)
        setRepositories(json)
    }

    useEffect(() => {
        fetchRespositories()
    }, [])

    return { repositories, loading, refetch: fetchRespositories }
}

export default useRepositories