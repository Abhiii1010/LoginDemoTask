import { StyleSheet, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function AccountSettings() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Settings</Text>
      
      <View style={styles.profileSection}>
        <View style={{borderRadius:50}}>
          <Image source={require('../../assets/images/react-logo.png')}/>
        </View>
        
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Marry Doe</Text>
          <Text style={styles.userEmail}>Marry@Gmail.com</Text>
        </View>
      </View>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti quaerat recusandae mollitia optio! Quasi dolore at, ut fugiat temporibus, deleniti dignissimos esse porro voluptas quod nulla non officilis officia.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,

  },

  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 24,
  },
  optionButton: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});