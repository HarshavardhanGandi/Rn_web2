import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Link} from '@react-navigation/native';

const Todoscreen = () => {
  const [todo, setTodo] = useState<any>('');
  console.log('todo: ', todo);
  const [todoList, setTodoList] = useState<any>([]);
  console.log('todoList: ', todoList);
  const [error, setError] = useState('');
  const [editedTodo, setEditedTodo] = useState<any>(null);
  console.log('editedTodo: ', editedTodo);

  const handleTodo = () => {
    if (todo.trim().length <= 0) {
      setError('Please add a todo');
    } else {
      setTodoList([...todoList, {id: Date.now().toString(), task: todo}]);
      setTodo('');
    }
  };

  const handleTextChange = (userText: any) => {
    setTodo(userText);
    setError('');
  };

  const deleteTodo = (id: any) => {
    let updatedTodo = todoList.filter((todo: any) => todo?.id !== id);
    setTodoList(updatedTodo);
  };

  const editTodo = (todo: any) => {
    setEditedTodo(todo);
    setTodo(todo.task);
  };

  const saveEditTodo = () => {
    const updatedTodos = todoList.map((task: any) => {
      if (task.id === editedTodo.id) {
        return {...task, task: todo};
      }
      return task;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');
  };

  const renderTodo = ({item}: any) => {
    console.log(item, 'item>>>>');
    return (
      <View
        style={{
          backgroundColor: '#5DADE2',
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 12,
          marginBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '800', flex: 1}}>
          {item.task}
        </Text>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => editTodo(item)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#1e90ff',
              borderRadius: 6,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 50,
            }}
            placeholder="Add a todo"
            value={todo}
            onChangeText={userText => handleTextChange(userText)}
          />
          {error && <Text style={{color: 'red'}}>{error}</Text>}
          {editedTodo ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#000',
                borderRadius: 6,
                paddingVertical: 8,
                marginVertical: 24,
                alignItems: 'center',
              }}
              onPress={() => saveEditTodo()}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                Save
              </Text>
            </TouchableOpacity>
          ) : (
            <Link to="/home">
              <View
                style={{
                  backgroundColor: '#000',
                  borderRadius: 6,
                  paddingVertical: 8,
                  marginVertical: 24,
                  alignItems: 'center',
                }}
                // onPress={handleTodo}
              >
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                  Add
                </Text>
              </View>
            </Link>
          )}

          <FlatList data={todoList} renderItem={renderTodo} />

          {todoList?.length <= 0 && (
            <View>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/06/20/22/24/robot-1470108_1280.png',
                }}
                style={{width: 400, height: 300, marginVertical: 60, flex: 1}}
              />
              <Text>Start Adding your Todo</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Todoscreen;

const styles = StyleSheet.create({});
