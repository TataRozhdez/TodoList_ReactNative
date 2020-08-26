import React, {useState} from 'react'
import {View, StyleSheet, TextInput,  Modal, Alert} from 'react-native'
import { THEME } from '../theme'
import {AppButton} from '../components/ui/AppButton'

export const EditModal = ({ visable, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Error!', `Minimum text length of 3 characters. Now ${title.trim().length} characters`)
    } else {
      onSave(title)
    }
  }

  const cancelHandler = () => {
    setTitle(value)
    onCancel
  }

  return (
    <Modal visible={visable} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Enter text'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
            Cancel
          </AppButton>
          <AppButton onPress={saveHandler}>
            Save
          </AppButton>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})