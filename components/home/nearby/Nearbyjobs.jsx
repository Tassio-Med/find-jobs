// import React from 'react'
// import { View, Text } from 'react-native'

// import styles from './nearbyjobcard.style'

// const NearbyJobCard = () => {
//   return (
//     <View>
//       <Text>NearbyJobCard</Text>
//     </View>
//   )
// }

// export default NearbyJobCard

import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobcard.style'
import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const NearbyJobs = () => {
  const router = useRouter();
  
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrog</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}

      </View>
    </View>
  )
}

export default NearbyJobs