import UsersData from "./UsersData.js"

export default class UsersView extends UsersData {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector("table tbody")
    this.update()
    this.handleForm()
  }

  handleForm() {
    const form = this.root.querySelector("header form")

    form.onsubmit = (event) => {
      event.preventDefault()

      const { value } = form.querySelector("input")

      this.add(value)
    }
  }

  update() {
    this.removeAllTableRows()

    this.users.forEach((user) => {
      const row = this.createTableRows()

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${user.name}`
      row.querySelector(".user a").href = `https://github.com/${user.login}`
      row.querySelector(".user a p").textContent = user.name
      row.querySelector(".user a span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers
      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?")

        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })

    this.empityTable()
  }

  removeAllTableRows() {
    this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove())
  }

  createTableRows() {
    const tr = document.createElement("tr")

    tr.innerHTML = `
      <td class="user">
        <img
          src=""
          alt=""
        />
        <a href="" target="_blank">
          <p></p>
          <span></span>
        </a>
      </td>
      <td class="repositories"></td>
      <td class="followers"></td>
      <td>
        <button class="remove">
          <img src="./images/trashCan.svg" alt="Trash can" />
        </button>
      </td>
    `

    return tr
  }

  empityTable() {
    const isEmpity = this.tbody.querySelectorAll("tr").length == 0

    if (isEmpity) {
      this.root.querySelector(".empity").classList.remove("hide")
      this.root.querySelector("table").classList.add("empity-table")
    } else {
      this.root.querySelector(".empity").classList.add("hide")
      this.root.querySelector("table").classList.remove("empity-table")
    }
  }
}
