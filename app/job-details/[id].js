import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'

import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  return (
    <Text>Job Details</Text>
  )
}

export default JobDetails