import GithubUser from "./GithubUser.js"

export default class UsersData {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.users = JSON.parse(localStorage.getItem("@users")) || []
  }

  save() {
    localStorage.setItem("@users", JSON.stringify(this.users))
  }

  async add(username) {
    try {
      const userAlreadyExists = this.users.find(
        (user) => user.login == username
      )

      if (userAlreadyExists) {
        throw new Error("Usuário já cadastrado!")
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!")
      }

      this.users = [user, ...this.users]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(deleteUser) {
    const filteredArray = this.users.filter((user) => user !== deleteUser)

    this.users = filteredArray
    this.update()
    this.save()
  }
}
