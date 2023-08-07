import { writable } from 'svelte/store';
import type { ITodo } from '~/entities/todo';

export const todos = writable<ITodo[]>([])