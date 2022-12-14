export interface TextFieldProps {
    input?: string | number
    styling?: string | any
    placeholder?: string
    label?: string
    medium?: true | null
    large?: true | null
    onAction?: () => void
}