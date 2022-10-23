import { useState } from "react";
import {
  Image,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

import LogoImg from "../../assets/Logo/logo.png";
import Plus from "../../assets/Icons/plus/plus.png";

import { Task, Tasks } from "../../components/Tasks";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [tasksCompleted, setTasksCompleted] = useState(0)

  function handleAddTask() {
    if (!taskName) {
      Alert.alert(
        "Tarefa Pendente",
        "Digite alguma tarefa"
      );
      return
    }

    addTask(taskName);
    setTaskName('');
  }

  function handleToggleTask(id: number) {
    const updateTasks = tasks.map(task => ({ ...task }))

    const foundItem = updateTasks.find(item => item.id === id);

    if (!foundItem)
      return;

    foundItem.done = !foundItem.done;
    setTasks(updateTasks);

    taskCompleted(updateTasks);
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    Alert.alert("Remover", `Remover tarefa ?`, [
      {
        text: "OK",
        onPress: () => setTasks(updatedTasks),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function addTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    if (tasks.map(item => item.title).includes(taskName)) {
      Alert.alert(
        "Tarefa Existe",
        "Já existe uma tarefa na lista com esses dados"
      );

      return
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function taskCompleted(tasks: Task[]) {
    const result = tasks.filter(task => task.done === true)
    setTasksCompleted(result.length)
  }

  return (
    <>
      <View style={styles.cont1}>
        <Image source={LogoImg} style={styles.logo} />
      </View>

      <View style={styles.container}>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa..."
            placeholderTextColor="#808080"
            value={taskName}
            onChangeText={setTaskName}
            onSubmitEditing={handleAddTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={Plus} style={styles.buttonText} />
          </TouchableOpacity>
        </View>

        <View style={styles.numbsCont}>
          <View style={styles.numbs}>
            <Text style={styles.numbs1}>Criadas</Text>
            <Text style={styles.numbers}>{tasks.length}</Text>
          </View>
          <View style={styles.numbs}>
            <Text style={styles.numbs2}>Concluídas</Text>
            <Text style={styles.numbers}>{tasksCompleted}</Text>
          </View>
        </View>

        <Tasks tasks={tasks} toggleTaskDone={handleToggleTask} removeTask={handleRemoveTask} />

      </View>
    </>
  );
}
