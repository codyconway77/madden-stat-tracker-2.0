import Login from '../pages/login'
import { render, screen, fireEvent, getByRole } from '@testing-library/react'

beforeAll(() => {
    render(<Login />)
})

describe("Login", () => {
    it("renders an input form", () => {
        const usernameInput = screen.getByLabelText(/username/i)
        const passwordInput = screen.getByLabelText(/password/i)

        expect(usernameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
    })
    it("should not submit a blank form", () => {
        fireEvent.click(getByRole("button", { name: /submit/i }))
        
        const usernameInput = screen.getByLabelText(/username/i)

        expect(usernameInput).toBeInTheDocument()
    })
})
