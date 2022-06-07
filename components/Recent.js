import styles from '../styles/recent.module.scss'

function Recent() {
  return (
      <div className={ styles.recent }>
          <h2>Recent Orders</h2>
          <table>
              <thead>
                  <tr>
                      <th>Product Name</th>
                       <th>Product Number</th>
                      <th>Payment</th>
                       <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85631</td>
                      <td>Due</td>
                      <td className={styles.warning}>Pending</td>
                      <td className={ styles.primary}>Details</td>

                  </tr>
                   <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85631</td>
                      <td>Due</td>
                      <td className={styles.warning}>Pending</td>
                      <td className={ styles.primary}>Details</td>

                  </tr>
                   <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85631</td>
                      <td>Due</td>
                      <td className={styles.warning}>Pending</td>
                      <td className={ styles.primary}>Details</td>

                  </tr>
                   <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85631</td>
                      <td>Due</td>
                      <td className={styles.warning}>Pending</td>
                      <td className={ styles.primary}>Details</td>

                  </tr>
                   <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85631</td>
                      <td>Due</td>
                      <td className={styles.warning}>Pending</td>
                      <td className={ styles.primary}>Details</td>

                  </tr>
                   <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85631</td>
                      <td>Due</td>
                      <td className={styles.warning}>Pending</td>
                      <td className={ styles.primary}>Details</td>

                  </tr>
              </tbody>
          </table>
          <a href="#">Show All</a>
    </div>
  )
}

export default Recent