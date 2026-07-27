import AppBar from './AppBar';
import Button from './Button';

export default function ComponentsOverrides(theme) {
    return Object.assign(
        AppBar(theme),
        Button(theme),
    );
}